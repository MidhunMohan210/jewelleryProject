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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
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
        damping: 20
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "",
      }}
      className="relative h-[350px] sm:h-full padding-reverse bg-cover sm:bg-[length:40%] bg-[#f8f2ef] sm:mt-12 reverse-Gap-Top"
    >
      {/* Content container */}
      <motion.div 
        variants={containerVariants}
        className="relative z-10 max-w-4xl mx-auto px-5 py-16 text-center flex flex-col justify-center items-center"
      >
        <motion.div
          variants={iconVariants}
        >
          <GiDiamondRing className="text-3xl sm:text-4xl text-yellow-700" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-4xl lg:text-5xl jost text-gray-600 !font-semibold mt-4"
        >
          HIGH QUALITY SINCE 1990
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-base text-gray-600 sm:mt-8 max-w-sm sm:max-w-xl mx-auto leading-relaxed jost px-4 sm:px-8 font-medium"
        >
          For over three decades, we've been creating masterpieces that
          celebrate life's precious moments. Our commitment to excellence and
          attention to detail has made us a trusted name in fine jewelry since
          1990. Each piece reflects our dedication to craftsmanship and our
          passion for timeless beauty.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Section3;