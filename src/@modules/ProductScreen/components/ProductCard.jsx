import React from "react";

const productTags = ["Travel", "Adventure", "Premium"];

const ProductCard = (props) => {
  const {
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
  } = props.data;

  const displayPrice = price ? `$${price}` : "Price on request";
  const displayImage =
    image ||
    images?.[0] ||
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
  const displayName = name || title || "Travel Product";
  const displayDescription =
    description || "Discover amazing travel experiences with TravelUp";
  const displayRating = rating?.rate || rating?.average || rating;

  return (
    <div className="h-full w-full cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
        {/* Image Section */}
        <div className="relative">
          <div className="p-2">
            <img
              src={displayImage}
              className="w-full h-48 object-contain rounded-md"
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
            {/* Title and Brand */}
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                {displayName}
              </h3>
              <p className="text-sm text-gray-600">{brand || "TravelUp"}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-4 line-clamp-2">
              {displayDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {productTags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium hover:bg-gradient-to-r hover:from-[#3BA9CA] hover:to-primary hover:text-white transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
              {category && (
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                  {category}
                </span>
              )}
            </div>
          </div>

          {/* Footer with Price and Date */}
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div className="text-lg font-bold text-primary">{displayPrice}</div>
            <div className="text-xs text-gray-500">
              {created_at
                ? new Date(created_at).toLocaleDateString()
                : "Available now"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
