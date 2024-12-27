import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import debounce from 'lodash.debounce';
// import './ScrollComponents.css'

const ScrollComponents = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Function to handle scroll visibility
  const handleScroll = debounce(() => {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setIsAtTop(scrollY === 0); // At the top
    setIsAtBottom(scrollY + windowHeight >= documentHeight - 10); // At the bottom
  }, 100); // Debounce to limit function calls

  // Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to Bottom
  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col gap-5 z-50 fixed bottom-10 right-4">
      {/* Scroll to Top Button */}
      {!isAtTop && (
        <motion.button
          onClick={scrollToTop}
          className="bg-gray-400 text-lg hover:bg-gray-600 text-white p-3 rounded-full flex items-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to Top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-white w-5 h-5 text-sm" />
        </motion.button>
      )}

      {/* Scroll to Bottom Button */}
      {/* {!isAtBottom && (
        <motion.button
          onClick={scrollToBottom}
          className="bg-gray-400 text-lg hover:bg-gray-600 text-white p-3 rounded-full flex items-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to Bottom"
        >
          <FontAwesomeIcon icon={faArrowDown} className="text-white w-5 h-5  text-lg" />
        </motion.button>
      )} */}
    </div>
  );
};

export default ScrollComponents;
