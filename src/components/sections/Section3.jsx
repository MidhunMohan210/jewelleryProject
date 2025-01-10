/* eslint-disable react/no-unescaped-entities */
import background from "../../assets/section3/background2.png";
import { GiDiamondRing } from "react-icons/gi";
import { motion } from "framer-motion";

const Section3 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{
        backgroundImage: `
        linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)),
        url(${background})
      `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        
      }}
      className="relative  h-full bg-cover sm:bg-[length:40%] padding-reverse  bg-[#FBF8F6] sm:mt-12"
    >
      {/* Content container */}
      <motion.div
        variants={containerVariants}
        className="relative z-10 max-w-4xl mx-auto px-5 py-16 md:py-24 text-center  flex flex-col justify-center items-center"
      >
        {/* Icon */}
        <motion.div
          variants={iconVariants}
          whileHover={{ scale: 1.1 }}
          className="mb-6 md:mb-8"
        >
          <GiDiamondRing className="text-3xl sm:text-4xl lg:text-5xl text-yellow-700" />
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-yellow-700/30 mb-6 md:mb-8"
        />

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-4xl lg:text-5xl  text-gray-600 font-semibold mb-6 md:mb-8 tracking-wide"
        >
          HIGH QUALITY SINCE 1990
        </motion.h1>

        {/* Description */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-base sm:text-lg text-gray-600  max-w-sm sm:max-w-xl mx-auto leading-relaxed font-medium px-4 sm:px-8">
            For over three decades, we've been creating masterpieces that
            celebrate life's precious moments. Our commitment to excellence and
            attention to detail have made us a trusted name in fine jewelry since
            1990.
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-sm sm:max-w-xl mx-auto leading-relaxed font-medium px-4 sm:px-8 italic">
            Each piece reflects our dedication to craftsmanship and our
            passion for timeless beauty.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section3;