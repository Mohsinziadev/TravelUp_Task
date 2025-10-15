import React from "react";

const SkeletonCard = () => {
  return (
    <div className="h-full w-full cursor-pointer">
      <div className="h-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 relative">
        <div className="relative">
          <div className="p-2">
            <div className="animate-pulse w-full h-48 bg-gray-200 rounded-md"></div>
          </div>

          <div className="absolute top-3 right-3 animate-pulse bg-gray-200 px-2 py-1 rounded-full w-12 h-6"></div>
        </div>

        <div className="p-4 flex flex-col h-full">
          <div className="">
            <div className="mb-3">
              <div className="animate-pulse h-6 bg-gray-200 rounded mb-1 w-3/4"></div>
              <div className="flex items-center gap-2 mb-1">
                <div className="animate-pulse w-4 h-4 bg-gray-200 rounded"></div>
                <div className="animate-pulse h-4 bg-gray-200 rounded w-24"></div>
              </div>
              <div className="animate-pulse h-4 bg-gray-200 rounded w-20"></div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="animate-pulse h-3 bg-gray-200 rounded w-8 mb-1 mx-auto"></div>
                <div className="animate-pulse h-4 bg-gray-200 rounded w-12 mx-auto"></div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="animate-pulse h-3 bg-gray-200 rounded w-12 mb-1 mx-auto"></div>
                <div className="animate-pulse h-4 bg-gray-200 rounded w-6 mx-auto"></div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="animate-pulse h-3 bg-gray-200 rounded w-16 mb-1 mx-auto"></div>
                <div className="animate-pulse h-4 bg-gray-200 rounded w-6 mx-auto"></div>
              </div>
            </div>

            <div className="mb-4 space-y-2">
              <div className="animate-pulse h-4 bg-gray-200 rounded w-full"></div>
              <div className="animate-pulse h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div className="animate-pulse h-5 bg-gray-200 rounded w-20"></div>
            <div className="animate-pulse h-8 bg-gray-200 rounded w-24"></div>
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
