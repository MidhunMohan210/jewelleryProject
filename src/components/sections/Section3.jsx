import { motion } from "framer-motion";

const Section3 = () => {
  const text = "HIGH QUALITY SINCE 1990";

  // Define animation variants for letters
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div className="relative w-full h-[500px] sm:h-full bg-[#F6F4F2] overflow-hidden">
      {/* Background image div with overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 w-full sm:h-full"
        style={{
          backgroundImage: `url('https://bijoux.vamtam.com/wp-content/uploads/2020/11/iStock-1164770941-Hand.png')`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm"></div> */}
      </motion.div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-16 text-center">
        {/* Main heading */}
        <motion.h1 className='text-gray-700 jost'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold jost text-gray-700 sm:mb-4"
        > 
          HIGH QUALITY SINCE 1990
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-md hidden sm:block md:text-xl jost text-gray-600 mb-6"
        >
          Everything you need to complete the perfect collection
        </motion.p>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed jost mt-10 sm:mt-0  px-4 sm:px-8 mb-10"
        >
          For over three decades, we've been creating masterpieces that celebrate
          life's precious moments. Our commitment to excellence and attention to
          detail has made us a trusted name in fine jewelry since 1990. Each piece
          reflects our dedication to craftsmanship and our passion for timeless
          beauty.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y:-50 }}
          whileInView={{ opacity: 1, scale: 1,y:0  }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="inline-block px-8 py-3 text-sm uppercase tracking-wider text-amber-700 border-b border-amber-400 hover:text-amber-600 hover:border-amber-600 transition-all duration-300"
        >
          SEE WHAT'S NEW
        </motion.button>
      </div>
    </div>
  );
};

export default Section3;
