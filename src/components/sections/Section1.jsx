/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import {
  fadeInFromLeft,
  fadeInFromRight,
  fadeInUp,
} from "../animation/variants";
import flower from "../../assets/section1/flower.png";

const Section1 = () => {
  return (
    <div className="w-full min-h-screen bg-white jost mt-5 py-14 sm:py-16 relative overflow-hidden">
      {/* Decorative Flower SVG */}
      <div className="absolute  sm:top-20 bottom-0 left-[-100px] opacity-[0.08] pointer-events-none">
        <img src={flower} alt="" className="rotate-[30deg]" />
     
      </div>

      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false }}
        className="text-center mb-16 flex flex-col items-center"
      >
        <motion.div className="text-amber-800 mb-4">
          <img
            src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/jewelry_img-2.svg"
            alt=""
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-light mb-4 marcellus-regular"
        >
          History of Perfection
          <br />
          Heritage of Beauty
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-gray-600 text-sm sm:text-md outfit max-w-[350px] sm:max-w-[600px]"
        >
          We design more than pieces – we sculpt experiences that linger through
          lifetimes. Every design tells a story of masterful artistry and
          classic allure.
        </motion.p>
      </motion.div>
      <div className="max-w-7xl mx-auto px-8 sm:px-28 sm:py-16 flex flex-col md:flex-row items-center gap-6 sm:gap-12">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          variants={fadeInFromLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <img
            src="https://wpbingo-adena.myshopify.com/cdn/shop/files/banner-25.jpg?v=1730707956"
            alt="Elegant woman wearing jewelry"
            className="w-full h-[400px] sm:h-[550px] object-cover grayscale"
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 px-1"
          variants={fadeInFromRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <motion.p
            className="text-goldColor uppercase tracking-wider text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            THE SIGNATURE
          </motion.p>

          <motion.h2
            className="text-5xl md:text-[80px] font-serif text-gray-800 leading-"
            style={{
              fontFamily: "Soligant",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            True
            <br />
            <span className="ml-4 sm:ml-7">
              {" "}
              Unique
              <br />
            </span>
            Styles
          </motion.h2>

          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Each piece tells a story of unparalleled artistry, where modern
            sophistication meets timeless tradition. Our master jewelers
            transform precious metals and rare gems into wearable masterpieces,
            creating heirlooms that capture life's most cherished moments
          </motion.p>

          <motion.button
            className="bg-gray-800  text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-700 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW MORE
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Section1;
