/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import banner from "../../assets/home/banner/banner3.jpg";

export function Banner() {
  return (
    <div className="relative h-screen  overflow-hidden padding-reverse">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-10 marcellus-regular ">
        <div className="flex items-center text-center sm:text-left justify-center sm:justify-start h-full ">
          <motion.div
            className="absolute bottom-[100px] sm:bottom-20 text-textColor"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-semibold  mb-2 sm:mb-5 tracking-wide "
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A Touch of Royalty
            </motion.h1>
            <motion.h2
              className="text-sm  md:text-lg font-light mb-1 max-w-[18rem]  sm:max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Discover a world of timeless beauty, handcrafted for life’s most
              precious memories
            </motion.h2>

            <motion.button
              className="bg-gray-500 hover:text-gray-900 mt-5 rounded-full sm:rounded-none text-textColor px-8 py-3  text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DISCOVER NOW
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
