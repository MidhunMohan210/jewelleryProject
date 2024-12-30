import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function Section2() {
    const image4 =
    "https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-5-2.jpg";
  const image5 =
    "https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-5-1.jpg";
  const image6 =
    " https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-1.jpg";
  const image7 =
    "	https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-1-2.jpg";
  const image8 =
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-2.jpg";
  const image9 =
    "	https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-2-2.jpg";
  const image10 =
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-3.jpg";
  const image11 =
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-3-2.jpg";
  const image12 =
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-4.jpg";
  const image13 =
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-4-2.jpg";
  const image14 =
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-5.jpg";
  const image15 =
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-5-2.jpg";
  const image16 =
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-6.jpg";
  const image17 =
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-6-2.jpg";
  const image18 =
    "https://portotheme.com/html/molla/assets/images/demos/demo-25/product/product-9.jpg";
  const image19 =
    "https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-14-1.jpg";
  const image20 =
    "https://wdtswarna.wpengine.com/wp-content/uploads/2024/10/product-17-1.jpg";

  const [products, setProducts] = useState([
    {
      id: 1,
      category: "DIAMOND",
      isWishlist: true,
      title: "Linen-blend dress",
      price: "$10.00",
      images: [image18, image19],

      colors: ["#d1d5db", "#93c5fd", "#fde047"],
    },
    {
      id: 2,
      category: "GOLD",
      isWishlist: true,
      title: "Sandals with lacing",
      price: "Now $20.00",
      originalPrice: "Was $84.00",
      images: [image6, image7],
      label: "Sale",
    },
    {
      id: 3,
      category: "DIAMOND",
      isWishlist: true,
      title: "Paper bag trousers",
      price: "$30.00",
      images: [image8, image9],
      colors: ["#6ee7b7", "#000000"],
    },
    {
      id: 4,
      category: "GOLD",
      isWishlist: true,
      title: "Bucket bag",
      price: "$40.00",
      images: [image10, image11],
    },
    {
      id: 5,
      category: "GOLD",
      isWishlist: true,
      title: "Another Dress",
      price: "$50.00",
      images: [image12, image13],
      colors: ["#d1d5db", "#93c5fd"],
    },
    {
      id: 6,
      category: "PLATINUM",
      isWishlist: true,
      title: "High Heels",
      price: "$60.00",
      images: [image14, image15],
      label: "New",
    },
    {
      id: 7,
      category: "CLOTHING",
      isWishlist: true,
      title: "Linen-blend dress",
      price: "$70.00",
      images: [image16, image17],
      colors: ["#d1d5db", "#93c5fd", "#fde047"],
    },
    {
      id: 8,
      category: "PLATINUM",
      isWishlist: true,
      title: "Sandals with lacing",
      price: "Now $80.00",
      originalPrice: "Was $84.00",
      images: [image4, image5],
      label: "Sale",
    },
    {
      id: 9,
      category: "DIAMOND",
      isWishlist: true,
      title: "Paper bag trousers",
      price: "$90.00",
      images: [image5, image4],
      colors: ["#6ee7b7", "#000000"],
    },
    {
      id: 10,
      category: "PLATINUM",
      isWishlist: true,
      title: "Linen-blend dress",
      price: "$100.00",
      images: [image20, image20],
      colors: ["#d1d5db", "#93c5fd", "#fde047"],
    },
    {
      id: 11,
      category: "GOLD",
      isWishlist: true,
      title: "Sandals with lacing",
      price: "Now $110.00",
      originalPrice: "Was $84.00",
      images: [image14, image15],
      label: "Sale",
    },
    {
      id: 12,
      category: "PLATINUM",
      isWishlist: true,
      title: "Paper bag trousers",
      price: "$120.00",
      images: [image16, image17],
      colors: ["#6ee7b7", "#000000"],
    },
    {
      id: 13,
      category: "DIAMOND",
      isWishlist: true,
      title: "Paper bag trousers",
      price: "$120.00",

      images: [image6, image7],
      colors: ["#6ee7b7", "#000000"],
    },
    // Add other products...
  ]);

  const [filteredCategory, setFilteredCategory] = useState("ALL");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
  };

  const handleWishlistClick = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isWishlist: !product.isWishlist }
          : product
      )
    );
  };

  const visibleProducts =
    filteredCategory === "ALL"
      ? products
      : products.filter((product) => product.category === filteredCategory);

  return (
    <div className="bg-white p-5 sm:p-16">
    <div className="text-center mb-6">
      <h2 className="text-2xl text-headingColor font-bold">Recent Arrivals</h2>
      <p className="text-gray-400">Aliquam tincidunt mauris eurisus</p>
    </div>
  
    {/* Category tabs */}
    <div className="flex justify-center mb-6">
      {["ALL", "DIAMOND", "GOLD", "PLATINUM"].map((category) => (
        <button
          key={category}
          className={`px-2 sm:px-4 py-2 mx-2 rounded-md font-medium transition-all duration-300 ${
            filteredCategory === category
              ? "border-b-2 border-yellow-500 text-yellow-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  
    {/* Slider Section */}
    <div className="relative px-4 sm:px-6">
      <Slider {...settings}>
        {visibleProducts.map((product) => (
          <div key={product.id} className="px-2">
            <motion.div className="relative border shadow-lg p-3 group">
              <div className="relative">
                {/* Image Transition on Hover */}
                <div className="relative w-full h-[450px] sm:h-[300px] overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={product.images[1]}
                    alt={`${product.title} alternate`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
  
                {/* Wishlist and Action Buttons */}
                <div className="absolute flex flex-row-reverse gap-2 bottom-6 right-3 items-center group-hover:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleWishlistClick(product.id)}
                    className={`p-[4px] rounded-full w-7 h-7 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 ${
                      product.isWishlist
                        ? "bg-white text-red-500 scale-110"
                        : "bg-white text-gray-300 hover:text-red-500"
                    }`}
                  >
                    <i className="fas fa-heart"></i>
                  </motion.button>
  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-2 bg-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-md shadow-lg opacity-0 hover:opacity-100 transition duration-300 group-hover:opacity-100"
                  >
                    Add to Wishlist
                  </motion.button>
                </div>
              </div>
  
              {/* Product Details */}
              <div className="mt-4">
                <p className="text-gray-500 text-sm font-semibold">
                  {product.category}
                </p>
                <p className="text-md text-headingColor font-medium">
                  {product.title}
                </p>
                <p className="text-red-500 text-lg font-semibold">
                  {product.price}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  
    {/* Custom styles for Slick slider arrows and dots */}
    <style jsx>{`
      :global(.slick-prev),
      :global(.slick-next) {
        width: 30px;
        height: 30px;
        z-index: 1;
      }
      :global(.slick-prev) {
        left: -35px;
      }
      :global(.slick-next) {
        right: -35px;
      }
      :global(.slick-prev:before),
      :global(.slick-next:before) {
        color: #888;
        font-size: 24px;
      }
      :global(.slick-dots) {
        bottom: -40px;
      }
      :global(.slick-dots li button:before) {
        font-size: 8px;
      }
      :global(.slick-dots li.slick-active button:before) {
        color: #eab308;
      }
    `}</style>
  </div>
  
  );
}

export default Section2;