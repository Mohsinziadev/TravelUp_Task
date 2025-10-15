import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.product);

  // Find the product by ID
  const product = products.find(
    (p) => p.id === productId || p._id === productId
  );

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-500">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

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
  } = product;

  const displayName = name || title || "Travel Product";
  const displayDescription =
    description || "Discover amazing travel experiences with TravelUp";
  const displayPrice = price ? `$${price}` : "Price on request";
  const displayImage =
    image ||
    images?.[0] ||
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
  const displayRating = rating?.rate || rating?.average || rating;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={displayImage}
                alt={displayName}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            {images && images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.slice(1, 5).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${displayName} ${index + 2}`}
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-75"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {displayName}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                {brand && (
                  <span className="text-lg text-gray-600">by {brand}</span>
                )}
                {displayRating && (
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="ml-1 text-gray-600">{displayRating}</span>
                  </div>
                )}
              </div>
              <div className="text-3xl font-bold text-primary mb-4">
                {displayPrice}
              </div>
            </div>

            {category && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Category:</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {category}
                </span>
              </div>
            )}

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Product Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {displayDescription}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Premium quality travel experience
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 customer support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Flexible booking options
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Best price guarantee
                </li>
              </ul>
            </div>

            <div className="space-y-4 pt-6">
              <button className="w-full bg-gradient-to-r from-[#3BA9CA] to-[#C11B82] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#2A8BB0] hover:to-[#A01A6B] transition-all duration-300 transform hover:scale-105">
                Book Now
              </button>
              <button className="w-full border border-[#3BA9CA] text-[#3BA9CA] py-3 px-6 rounded-lg font-semibold hover:bg-[#3BA9CA] hover:text-white transition-all duration-300">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-[#3BA9CA] mb-2">100%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-[#3BA9CA] mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-[#3BA9CA] mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
