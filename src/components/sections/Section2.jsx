import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

function Section2() {
  const [filteredCategory, setFilteredCategory] = useState("ALL");
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const images = [
    "https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-5-2.jpg",
    "https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-5-1.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-1.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-1-2.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-2.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-2-2.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-3.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-3-2.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-4.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-4-2.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-5.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-5-2.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-6.jpg",
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-6-2.jpg",
  ];

  const [products, setProducts] = useState([
    {
      id: 1,
      category: "DIAMOND",
      isWishlist: false,
      title: "Linen-blend dress",
      price: "$10.00",
      images: [images[0], images[1]],
    },
    {
      id: 2,
      category: "GOLD",
      isWishlist: false,
      title: "Sandals with lacing",
      price: "$20.00",
      images: [images[2], images[3]],
    },
    {
      id: 3,
      category: "PLATINUM",
      isWishlist: false,
      title: "High Heels",
      price: "$30.00",
      images: [images[4], images[5]],
    },
    {
      id: 4,
      category: "GOLD",
      isWishlist: false,
      title: "Bucket Bag",
      price: "$40.00",
      images: [images[6], images[7]],
    },
    {
      id: 5,
      category: "DIAMOND",
      isWishlist: false,
      title: "Paper bag trousers",
      price: "$50.00",
      images: [images[8], images[9]],
    },
    {
      id: 6,
      category: "PLATINUM",
      isWishlist: false,
      title: "Sandals",
      price: "$60.00",
      images: [images[10], images[11]],
    },
    {
      id: 7,
      category: "DIAMOND",
      isWishlist: false,
      title: "Elegant Dress",
      price: "$70.00",
      images: [images[12], images[13]],
    },
  ]);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
    dotsClass: "slick-dots",
  };

  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredProducts =
    filteredCategory === "ALL"
      ? products
      : products.filter((p) => p.category === filteredCategory);

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
            <motion.div
              key={product.id}
              className="p-4 shadow-md rounded-lg bg-white hover:shadow-xl group transition-shadow duration-300 relative"
            >
              <div className="relative overflow-hidden rounded-sm aspect-w-1 aspect-h-1">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-[270px] object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={product.images[1]}
                  alt={`${product.title} alternate`}
                  className="w-full h-[270px] object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">{product.category}</p>
                <h3 className="text-md font-semibold text-gray-800 mt-1">
                  {product.title}
                </h3>
                <p className="text-yellow-500 font-bold mt-1">{product.price}</p>
              </div>

              {/* Wishlist Button */}
              <div className="absolute top-7  right-4 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100  transition duration-300">
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-500 text-white text-sm font-bold px-4 py-2 rounded-md shadow-lg"
                >
                  Add to Wishlist
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleWishlistClick(product.id)}
                  className={` w-8 h-8 rounded-full flex justify-center items-center shadow-md ${
                    product.isWishlist
                      // ? "bg-white text-red-500"
                      // : "bg-gray-200   hover:text-white"
                       ? 'bg-white text-red-500 scale-110 '
                                  : 'bg-white text-gray-300  '
                  }`}
                >
                <Heart className="w-5 h-5" fill="red" />
                </motion.button>

              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Section2;
