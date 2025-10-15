import React from "react";

const SkeletonCard = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
        {/* Image Section */}
        <div className="relative">
          <div className="animate-pulse w-full h-48 bg-gray-200"></div>
          <div className="absolute top-3 right-3 animate-pulse bg-gray-200 px-2 py-1 rounded-full w-12 h-6"></div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col h-full">
          <div className="flex-grow">
            {/* Title and Brand */}
            <div className="mb-3">
              <div className="animate-pulse h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
              <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2"></div>
            </div>

            {/* Description */}
            <div className="mb-4 space-y-2">
              <div className="animate-pulse h-4 bg-gray-200 rounded w-full"></div>
              <div className="animate-pulse h-4 bg-gray-200 rounded w-2/3"></div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="animate-pulse h-6 bg-gray-200 rounded w-16"></div>
              <div className="animate-pulse h-6 bg-gray-200 rounded w-20"></div>
              <div className="animate-pulse h-6 bg-gray-200 rounded w-14"></div>
            </div>
          </div>

          {/* Footer with Price and Date */}
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div className="animate-pulse h-6 bg-gray-200 rounded w-16"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductSkeltonLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="h-full">
          <SkeletonCard />
        </div>
      ))}
    </div>
  );
};

export default ProductSkeltonLoader;
