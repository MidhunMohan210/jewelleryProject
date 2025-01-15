/* eslint-disable react/prop-types */
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { useState,useEffect } from 'react';

const ProductCard = ({ product }) => {
  const [filteredCategory, setFilteredCategory] = useState('ALL');
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [slideDirection, setSlideDirection] = useState(0);
  const [isGroupTransition, setIsGroupTransition] = useState(false);

  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
    setStartIndex(0);
    setIsGroupTransition(true);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    setCardsPerPage(width < 640 ? 1 : 4);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleProducts =
    filteredCategory === 'ALL'
      ? product
      : product.filter((product) => product.category === filteredCategory);

  const totalPages = Math.ceil(visibleProducts.length / cardsPerPage);

  const handleNext = () => {
    if (startIndex + cardsPerPage < visibleProducts.length) {
      setIsGroupTransition(false);
      setSlideDirection(1);
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setIsGroupTransition(false);
      setSlideDirection(-1);
      setStartIndex(startIndex - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setIsGroupTransition(false);
      handleNext();
    },
    onSwipedRight: () => {
      setIsGroupTransition(false);
      handlePrevious();
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const handleDotClick = (index) => {
    setIsGroupTransition(true);
    setSlideDirection(index > startIndex ? 1 : -1);
    setStartIndex((index - 1) * cardsPerPage);
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

  // Single card transition variant
  const singleCardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  // Group transition variant
  const groupVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };
  return (
    <Card className="  w-[500px] h-[300px]  bg-white shadow-sm hover:shadow-md transition-shadow duration-200 relative">
      <motion.div
                        key={product.id}
                        className="flex-none relative border shadow-lg p-3 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: isGroupTransition ? index * 0.1 : 0 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="relative">
                          <motion.img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-[300px] h-[450px] sm:w-[200px] sm:h-[300px] object-cover group-hover:hidden transition duration-300"
                          />
                          <motion.img
                            src={product.images[1]}
                            alt={`${product.title} alternate`}
                            className="w-[300px] h-[450px] sm:w-[200px] sm:h-[300px] hidden group-hover:block transition duration-300"
                          />
    
                          <div className="absolute flex flex-row-reverse gap-2 bottom-6 right-3 items-center group-hover:w-auto">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleWishlistClick(product.id)}
                              className={`p-[4px] rounded-full w-7 h-7 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 ${
                                product.isWishlist
                                  ? 'bg-white text-red-500 scale-110 '
                                  : 'bg-white text-gray-300  hover:text-red-500'
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
                        <div className="mt-4">
                          <p className="text-gray-500 text-sm font-semibold">{product.category}</p>
                          <p className="text-md text-headingColor font-medium">{product.title}</p>
                          <p className="text-red-500 text-lg font-semibold">{product.price}</p>
                        </div>
                      </motion.div>
    </Card>
  );
};

export default ProductCard;