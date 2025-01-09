/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import productsData from "@/data/productData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Section2() {
  const [filteredCategory, setFilteredCategory] = useState("ALL");

  const navigate = useNavigate();
  const [products, setProducts] = useState(productsData);
  const handleWishlistToggle = (productId) => {
    // Update the products state
    console.log(productId,'productId')
    const updatedProducts = products.map((product) =>
      product._id === productId
        ? { ...product, isWishlist: !product.isWishlist }
        : product
    );
    setProducts(updatedProducts);
  
    // Update the original productsData array
    const productIndex = productsData.findIndex((product) => product._id === productId);
    if (productIndex !== -1) {
      console.log('done')
      productsData[productIndex].isWishlist = !productsData[productIndex].isWishlist;
    }

    console.log(productsData,'pppp')
  };

  const handleClick = (event, productId) => {
    event.stopPropagation(); // Prevents event from reaching parent elements
    handleWishlistToggle(productId);
  };
  // const handleWishlistClick = (productId) => {
  //   setProducts((prevProducts) =>
  //     prevProducts.map((product) =>
  //       product.id === productId
  //         ? { ...product, isWishlist: !product.isWishlist }
  //         : product
  //     )
  //   );
  // };

  // Custom arrow components using Lucide icons
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute hidden right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md sm:flex items-center justify-center z-10 hover:bg-gray-50 transition-all duration-200"
      aria-label="Next"
    >
      <ChevronRight className="w-6 h-6 text-gray-600" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-[-50px] hidden top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md sm:flex items-center justify-center z-10 hover:bg-gray-50 transition-all duration-200"
      aria-label="Previous"
    >
      <ChevronLeft className="w-6 h-6 text-gray-600" />
    </button>
  );

  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredProducts =
    filteredCategory === "ALL"
      ? products
      : products.filter(
          (p) => p.material.toLowerCase() === filteredCategory.toLowerCase()
        );


     
      

  const settings = {
    dots: true,
    infinite: filteredProducts.length > 4, // Only enable infinite scroll if there are more than 4 items
    speed: 500,
    
    slidesToShow: Math.min(filteredProducts.length, 3),
   
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(filteredProducts.length, 3),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(filteredProducts.length, 2),
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: Math.min(filteredProducts.length, 1),
        },
      },
    ],
    dotsClass: "slick-dots",
  };
  return (
    <div className="bg-white p-6  sm:p-16">
      {/* Header */}
      {/* <div className="text-center mb-8">
        <h2 className="text-3xl philosopher-bold font-bold text-gray-800 jost">
          New Arrivals
        </h2>
        <p className="text-gray-400 text-md sm:text-lg jost  ">
          Discover our latest collection
        </p>
      </div> */}

      <div className="text-center mb-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl jost text-headingColor font-semibold"
        >
          New Arrivals
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#7777] mt-1 text-sm sm:text-[17px]"
        >
          Discover our latest collection
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-6 ">
        {["ALL", "DIAMOND", "GOLD", "PLATINUM"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 mx-1  font-medium text-sm sm:text-base jost transition-all duration-300  ${
              filteredCategory === category
                ? "border-goldColor border-b-2 text-goldColor"
                : "text-gray-500 hover:text-goldColor"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Slider Section */}
      <div className="relative  mt-14 ">
        <style>
          {`
            .slick-dots {
              bottom: -40px;
            }
            .slick-dots li {
              margin: 0 4px;
            }
            .slick-dots li button {
              width: 8px;
              height: 8px;
            }
            .slick-dots li button:before {
              content: '';
              width: 8px;
              height: 8px;
              background: #D1D5DB;
              border-radius: 50%;
              opacity: 1;
              transition: all 0.3s ease;
            }
            .slick-dots li.slick-active button:before {
              background: #F59E0B;
              transform: scale(1.2);
            }
            .slick-track {
              margin-left: 0;
            }
            .slick-slide {
              padding: 0 12px;
            }
          `}
        </style>

        <Slider {...settings} className="custom-slider">
          {filteredProducts.map((product) => (
            <div
              onClick={() =>
                navigate(`/productDetail/${product._id}`, {
                  state: { product },
                })
              }
              className=" jost group  relative cursor-pointer w-full max-w-sm  bg-white rounded-lg  shadow-md transition-all duration-300"
            >
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
                  <span className="absolute left-4 top-4 rounded-full bg-[#6c757d] font-semibold backdrop-blur-sm px-4 py-1 text-xs  tracking-wide text-white">
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
                <h3 className="mt-2 text-sm sm:text-lg font-normal text-gray-900 line-clamp-1">
                  {product.name}
                </h3>

                {/* Price Section */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-sm sm:text-lg font-light text-gray-900">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through font-light">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs tracking-wide ${
                      product.status === "In Stock"
                        ? "bg-gray-50 text-gray-700"
                        : "bg-gray-50 text-gray-500"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Action Button */}
                <div className="absolute top-2 right-2 flex items-center justify-end">
  <button
    onClick={(e) => handleClick(e, product._id)}
    className={`p-2.5 transition-all duration-300 relative ${
      product.isWishlist ? "text-red-500" : "text-gray-400"
    }`}
  >
    <Heart
      className={`h-5 w-5 transition-colors duration-300 ${
        product.isWishlist
          ? "fill-current text-red-500 animate-crackle"
          : "group-hover:text-gray-700"
      }`}
    />
    {product.isWishlist && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="crackle-animation"></div>
      </div>
    )}
  </button>
</div>


              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Section2;
