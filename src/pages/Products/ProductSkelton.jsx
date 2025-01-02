import React from 'react'

function ProductSkelton() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
    {/* Image Skeleton */}
    <div className="relative h-80 w-full bg-gray-200 animate-pulse"></div>
    
    {/* Content Skeleton */}
    <div className="p-6 space-y-4">
      {/* Category Skeleton */}
      <div className="h-4 bg-gray-200 rounded-full w-1/4 animate-pulse"></div>
      
      {/* Title Skeleton */}
      <div className="h-6 bg-gray-200 rounded-full w-3/4 animate-pulse"></div>
      
      {/* Price Skeleton */}
      <div className="flex justify-between items-center space-x-4">
        <div className="h-5 bg-gray-200 rounded-full w-1/4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded-full w-1/5 animate-pulse"></div>
      </div>

      {/* Status Skeleton */}
      {/* <div className="h-5 bg-gray-200 rounded-full w-1/4 animate-pulse"></div> */}
    </div>
  </div>
  )
}

export default ProductSkelton