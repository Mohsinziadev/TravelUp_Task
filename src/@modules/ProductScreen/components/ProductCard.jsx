import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setEditingProduct,
  deleteProduct,
} from "../../../@store/main/productSlice";
import DeleteConfirmModal from "./DeleteConfirmModal";

const productTags = ["Travel", "Adventure", "Premium"];

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const [showActions, setShowActions] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const {
    id,
    name,
    title,
    description,
    price,
    category,
    brand,
    rating,
    image,
    images,
    created_at,
    location,
    sqft,
    bedroom,
    bath,
    details,
  } = props.data;

  const displayPrice = price ? `$${price}` : "Price on request";
  const displayImage =
    image ||
    images?.[0] ||
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
  const displayName = name || title || "Travel Product";
  const displayDescription =
    description || details || "Discover amazing properties with TravelUp";
  const displayRating = rating?.rate || rating?.average || rating;

  const handleEdit = () => {
    dispatch(setEditingProduct(props.data));
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      await dispatch(deleteProduct(id));
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCloseDeleteModal = () => {
    if (!isDeleting) {
      setShowDeleteModal(false);
    }
  };

  return (
    <div
      className="h-full w-full cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 relative">
        {showActions && (
          <div className="absolute top-2 left-2 z-10 flex space-x-2">
            <button
              onClick={handleEdit}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              title="Edit Product"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-lg"
              title="Delete Product"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Image Section */}
        <div className="relative">
          <div className="p-2">
            <img
              src={displayImage}
              className="w-full h-48 object-cover rounded-md"
              alt={displayName}
            />
          </div>
          {displayRating && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              ⭐ {displayRating}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col h-full">
          <div className="flex-grow">
            {/* Title and Location */}
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                {displayName}
              </h3>
              <div className="flex items-center gap-2 mb-1">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm text-gray-600">
                  {location || "Location TBD"}
                </p>
              </div>
              <p className="text-sm text-gray-500">{brand || "TravelUp"}</p>
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {sqft && (
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Sq Ft</p>
                  <p className="text-sm font-normal text-gray-900">
                    {sqft.toLocaleString()}
                  </p>
                </div>
              )}
              {bedroom !== undefined && (
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Bedrooms</p>
                  <p className="text-sm font-normal text-gray-900">{bedroom}</p>
                </div>
              )}
              {bath !== undefined && (
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Bathrooms</p>
                  <p className="text-sm font-normal text-gray-900">{bath}</p>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-4 line-clamp-2">
              {displayDescription}
            </p>
          </div>

          {/* Footer with Price and Details Button */}
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div className="text-md font-semibold text-gray-500">
              {displayPrice} {" /-"}
            </div>
            <button
              onClick={() => {
                // Handle details view - you can implement modal or navigation here
                console.log("View details for:", displayName);
                alert(
                  `Details for ${displayName}:\n\n${
                    details || displayDescription
                  }`
                );
              }}
              className="px-3 py-2 bg-[#d6d6d6] text-black text-xs rounded-md hover:bg-[#bcbcbc] transition-colors duration-200"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        productName={displayName}
        loading={isDeleting}
      />
    </div>
  );
};

export default ProductCard;
