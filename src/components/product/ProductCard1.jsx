/* eslint-disable react/prop-types */
import { Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const ProductCard1 = ({ product }) => {

    const navigate = useNavigate()
  return (
    <div  onClick={()=>navigate(`/productDetail/${product._id}`,{
        state:{product}
      })} className="group jost relative w-full max-w-sm mx-auto bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-80 w-full overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {product.image1 && (
          <img
            src={product.image1}
            alt={`${product.name} alternate`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        )}
        
        {/* Label Badge */}
        {product.label && (
          <span className="absolute left-4 top-4 rounded-full bg-black/80 backdrop-blur-sm px-4 py-1 text-xs font-light tracking-wide text-white">
            {product.label}
          </span>
        )}
      </div>

      {/* Content Container */}
      {/* hidden group-hover:block */}
      <div className="p-6  ">
        {/* Category */}
        <p className="text-xs font-light uppercase tracking-widest text-gray-400">
          {product.category}
        </p>
        
        {/* Product Name */}
        <h3 className="mt-2 text-lg font-normal text-gray-900 line-clamp-1">
          {product.name}
        </h3>

        {/* Price Section */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-lg font-light text-gray-900">
              {product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through font-light">
                {product.oldPrice}
              </span>
            )}
          </div>
          
          {/* Status Badge */}
          <span className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs tracking-wide ${
            product.status === 'In Stock' 
              ? 'bg-gray-50 text-gray-700'
              : 'bg-gray-50 text-gray-500'
          }`}>
            {product.status}
          </span>
        </div>

        {/* Action Button */}
        <div className=" absolute top-2 right-2  flex items-center justify-end">
          <button className=" p-2.5 transition-all duration-300">
            <Heart className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-gray-700 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;