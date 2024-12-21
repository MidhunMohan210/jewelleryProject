import React, { useState, useEffect } from 'react';
import image2 from '../../assets/section2/product-1-2.jpg';
import image3 from '../../assets/section2/product-1.jpg';

function Section2() {
  const [products, setProducts] = useState([
    {
      id: 1,
      category: 'CLOTHING',
      isWishlist: true,
      title: 'Linen-blend dress',
      price: '$10.00',
      images: [image2, image3],
      colors: ['#d1d5db', '#93c5fd', '#fde047'],
    },
    {
      id: 2,
      category: 'SHOES',
      isWishlist: true,
      title: 'Sandals with lacing',
      price: 'Now $20.00',
      originalPrice: 'Was $84.00',
      images: [image2, image3],
      label: 'Sale',
    },
    {
        id: 3,
        category: 'CLOTHING',
        isWishlist:true,
        title: 'Paper bag trousers',
        price: '$30.00',
        images: [image2, image3],
        colors: ['#6ee7b7', '#000000'],
      },
      {
        id: 4,
        category: 'HANDBAGS',
        isWishlist:true,
        title: 'Bucket bag',
        price: '$40.00',
        images: [image2, image3],
      },
      {
        id: 5,
        category: 'CLOTHING',
        isWishlist:true,
        title: 'Another Dress',
        price: '$50.00',
        images: [image2, image3],
        colors: ['#d1d5db', '#93c5fd'],
      },
      {
        id: 6,
        category: 'SHOES',
        isWishlist:true,
        title: 'High Heels',
        price: '$60.00',
        images: [image2, image3],
        label: 'New',
      },
      {
        id: 7,
        category: 'CLOTHING',
        isWishlist:true,
        title: 'Linen-blend dress',
        price: '$70.00',
        images: [image2, image3],
        colors: ['#d1d5db', '#93c5fd', '#fde047'],
      },
      {
        id: 8,
        category: 'SHOES',
        isWishlist:true,
        title: 'Sandals with lacing',
        price: 'Now $80.00',
        originalPrice: 'Was $84.00',
        images: [image2, image3],
        label: 'Sale',
      },
      {
        id: 9,
        category: 'CLOTHING',
        isWishlist:true,
        title: 'Paper bag trousers',
        price: '$90.00',
        images: [image2, image3],
        colors: ['#6ee7b7', '#000000'],
      },
      {
        id: 10,
        category: 'CLOTHING',
        isWishlist:true,
        title: 'Linen-blend dress',
        price: '$100.00',
        images: [image2, image3],
        colors: ['#d1d5db', '#93c5fd', '#fde047'],
      },
      {
        id: 11,
        category: 'SHOES',
        isWishlist:true,
        title: 'Sandals with lacing',
        price: 'Now $110.00',
        originalPrice: 'Was $84.00',
        images: [image2, image3],
        label: 'Sale',
      },
      {
        id: 12,
        category: 'CLOTHING',
        isWishlist:true,
        title: 'Paper bag trousers',
        price: '$120.00',
        images: [image2, image3],
        colors: ['#6ee7b7', '#000000'],
      },
  ]);

  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleWishlistClick = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isWishlist: !product.isWishlist }
          : product
      )
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerPage(2); // Small devices
      } else {
        setCardsPerPage(4); // Large devices
      }
    };

    // Set initial cards per page
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / cardsPerPage);

  const handleNext = () => {
    if (startIndex + cardsPerPage < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(Math.max(0, startIndex - 1));
    }
  };

  const handleDotClick = (index) => {
    setStartIndex((index - 1) * cardsPerPage);
  };

  // Handle swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      handleNext(); // Swipe left
    } else if (touchEnd - touchStart > 50) {
      handlePrevious(); // Swipe right
    }
  };

  return (
    <div
      className="bg-white p-16"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl text-headingColor font-bold">Recent Arrivals</h2>
        <p className="text-gray-400">Aliquam tincidunt mauris eurisus</p>
      </div>

      <div className="flex justify-center items-center">
        {/* Left Button */}
        <button
          className={`${
            startIndex === 0 ? 'invisible' : 'visible'
          } text-gray-400 cursor-pointer text-lg hover:text-gray-600`}
          onClick={handlePrevious}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        {/* Product Cards */}
        <div className="flex overflow-hidden space-x-6 px-6">
          {products.slice(startIndex, startIndex + cardsPerPage).map((product) => (
            <div
              key={product.id}
              className="flex-none transition-transform duration-500 ease-in-out relative p-6 w-64 group"
              draggable
            >
              {/* Product Card */}
              <div className="relative z-10">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-[300px] h-[300px] object-cover group-hover:hidden transition duration-300"
                />
                <img
                  src={product.images[1]}
                  alt={`${product.title} alternate`}
                  className="w-[300px] h-[300px] hidden group-hover:block transition duration-300"
                />

                {/* Wishlist Icon */}
                <div className="absolute flex flex-row-reverse gap-2 bottom-6 right-3 items-center group-hover:w-auto">
                  <button
                    onClick={() => handleWishlistClick(product.id)}
                    className={`p-[4px] rounded-full w-7 h-7 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 ${
                      product.isWishlist
                        ? 'bg-yellow-500 text-white'
                        : 'bg-white text-yellow-500'
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <i className="fas  fa-heart"></i>
                  </button>

                  {/* Detailed Button */}
                  <button className="mt-2 bg-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-md shadow-lg opacity-0 hover:opacity-100 transition duration-300 group-hover:opacity-100">
                    Add to Wishlist
                  </button>
                </div>

                {/* Label for Sale */}
                {product.label && (
                  <span className="absolute top-2 left-2 bg-brown-500 text-white text-xs font-bold px-2 py-1">
                    {product.label}
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="mt-4">
                <p className="text-gray-500 text-sm font-semibold">{product.category}</p>
                <p className="text-md text-headingColor font-medium">{product.title}</p>
                <p className="text-red-500 text-lg font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          className={`${
            startIndex + cardsPerPage >= products.length ? 'invisible' : 'visible'
          } text-gray-400 cursor-pointer hover:text-gray-600`}
          onClick={handleNext}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="sm:flex hidden justify-center mt-7">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index + 1)}
            className={`w-3 h-3 rounded-full inline-block mx-1 cursor-pointer ${
              index === Math.floor(startIndex / cardsPerPage)
                ? 'bg-gray-400'
                : 'bg-gray-200'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Section2;
