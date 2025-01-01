import React from 'react';
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative w-full max-w-sm mx-auto bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-80 w-full overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {product.image1 && (
          <img
            src={product.image1}
            alt={`${product.name} alternate`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        
        {/* Label Badge */}
        {product.label && (
          <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white shadow-sm">
            {product.label}
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Category */}
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {product.category}
        </p>
        
        {/* Product Name */}
        <h3 className="mt-2 text-lg font-semibold text-headingColor line-clamp-1">
          {product.name}
        </h3>

        {/* Price Section */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-bold text-yellow-600">
              {product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.oldPrice}
              </span>
            )}
          </div>
          
          {/* Status Badge */}
          <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
            product.status === 'In Stock' 
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {product.status}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-between space-x-4">
          <button className="group-hover:bg-blue-50 rounded-full p-2.5 transition-colors duration-300">
            <Heart className="h-5 w-5 text-yellow-600" />
          </button>
          
          {/* <button className="flex-1 flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-600 px-4 py-2.5 text-sm font-medium text-white rounded-lg  transition-colors duration-300">
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;