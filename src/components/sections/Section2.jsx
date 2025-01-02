import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import productsData from "@/data/productData";
import { useNavigate } from "react-router-dom";

function Section2() {
  const [filteredCategory, setFilteredCategory] = useState("ALL");
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  // const images = [
  //   "https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-5-2.jpg",
  //   "https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-5-1.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-1.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-1-2.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-2.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-2-2.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-3.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-3-2.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-4.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-4-2.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-5.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-5-2.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-6.jpg",
  //   "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-6-2.jpg",
  // ];

  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     category: "DIAMOND",
  //     isWishlist: false,
  //     title: "Linen-blend dress",
  //     price: "$10.00",
  //     images: [images[0], images[1]],
  //   },
  //   {
  //     id: 2,
  //     category: "GOLD",
  //     isWishlist: false,
  //     title: "Sandals with lacing",
  //     price: "$20.00",
  //     images: [images[2], images[3]],
  //   },
  //   {
  //     id: 3,
  //     category: "PLATINUM",
  //     isWishlist: false,
  //     title: "High Heels",
  //     price: "$30.00",
  //     images: [images[4], images[5]],
  //   },
  //   {
  //     id: 4,
  //     category: "GOLD",
  //     isWishlist: false,
  //     title: "Bucket Bag",
  //     price: "$40.00",
  //     images: [images[6], images[7]],
  //   },
  //   {
  //     id: 5,
  //     category: "DIAMOND",
  //     isWishlist: false,
  //     title: "Paper bag trousers",
  //     price: "$50.00",
  //     images: [images[8], images[9]],
  //   },
  //   {
  //     id: 6,
  //     category: "PLATINUM",
  //     isWishlist: false,
  //     title: "Sandals",
  //     price: "$60.00",
  //     images: [images[10], images[11]],
  //   },
  //   {
  //     id: 7,
  //     category: "DIAMOND",
  //     isWishlist: false,
  //     title: "Elegant Dress",
  //     price: "$70.00",
  //     images: [images[12], images[13]],
  //   },
  // ]);


  const navigate = useNavigate()
  const [products,setProducts] = useState(productsData)
  const handleWishlistClick = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isWishlist: !product.isWishlist }
          : product
      )
    );
  };

  // Custom arrow components using Lucide icons
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-all duration-200"
      aria-label="Next"
    >
      <ChevronRight className="w-6 h-6 text-gray-600" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-all duration-200"
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
      : products.filter((p) => p.material.toLowerCase() === filteredCategory.toLowerCase());

      
  const settings = {
    dots: true,
    infinite: filteredProducts.length > 4, // Only enable infinite scroll if there are more than 4 items
    speed: 500,
    slidesToShow: Math.min(filteredProducts.length, 4), // Adjust slidesToShow dynamically
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
    <div className="bg-white p-6 sm:p-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl philosopher-bold font-bold text-gray-800">New Arrivals</h2>
        <p className="text-gray-400 text-sm sm:text-md ">Discover our latest collection</p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-6">
        {["ALL", "DIAMOND", "GOLD", "PLATINUM"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 mx-2 rounded-md font-medium transition-all duration-300 ${
              filteredCategory === category
                ? "border-yellow-500 border-b-2 text-yellow-500"
                : "text-gray-500 hover:text-yellow-500"
                 
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Slider Section */}
      <div className="relative px-8">
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

        <Slider {...settings}>
          {filteredProducts.map((product) => (
         <div  onClick={()=>navigate(`/productDetail/${product._id}`,{
          state:{product}
        })} className="group relative cursor-pointer w-full max-w-sm mx-auto bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
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
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Section2;
