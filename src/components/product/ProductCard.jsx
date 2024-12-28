/* eslint-disable react/prop-types */
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <Card className="  bg-white shadow-sm hover:shadow-md transition-shadow duration-200 relative">
      <div className="p-4 flex flex-col items-center">
        {/* Product Image */}
        <div className="relative w-full mb-4">
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="w-full h-48 object-cover"
          />
          <button 
            className="absolute top-0 right-0 p-2"
            aria-label="Add to wishlist"
          >
            <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Product Details */}
        <div className="w-full text-center">
          <div className="text-gray-500 uppercase text-sm mb-1">
            {product.category}
          </div>
          <h3 className="text-gray-700 font-medium mb-2">
            {product.title}
          </h3>
          <div className="flex justify-center items-center gap-2">
            {product.salePrice ? (
              <>
                <span className="text-red-500">Now ${product.salePrice}</span>
                <span className="text-gray-400 line-through">${product.originalPrice}</span>
              </>
            ) : (
              <span className="text-red-500">${product.price}</span>
            )}
          </div>
        </div>

        {/* Add to Wishlist Button (Mobile) */}
        {product.wishlist && (
          <button 
            className="mt-4 px-4 py-2 bg-yellow-200 text-gray-700 rounded-full text-sm hover:bg-yellow-300 transition-colors"
          >
            Add to Wishlist
          </button>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;