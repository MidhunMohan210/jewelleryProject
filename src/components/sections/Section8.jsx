/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import flower from "../../assets/section8/flower.png";

function Section8() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className=" relative flex flex-col overflow-hidden  sm:mt-10">

        <div className="absolute top-40 sm:top-20 bottom-0 left-[-100px] opacity-20 sm:opacity-10 pointer-events-none">
              <img src={flower} alt="" className="transform scale-x-[-1] animate-swayhome" />
           
            </div>
      {/* First Section */}
      <div className="max-w-6xl mx-auto px-8 sm:px-16 py-16 jost ">
        <motion.div
          className="grid md:grid-cols-2 gap-10 sm:gap-2 items-start"
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: false }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Left Column - Product Title */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <h1  className="text-4xl md:text-5xl font-prem font-medium text-gray-600 leading-tight">
              Timeless Elegance
              <br />
              in Every Detail
            </h1>
          </motion.div>

          {/* Right Column - Product Description */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <p className="text-lg text-[#777777] leading-relaxed">
              We take pride in designing jewelry that combines timeless beauty
              with modern craftsmanship. Each piece in our collection is
              thoughtfully created to reflect sophistication and individuality.
            </p>

            <p className="text-lg text-[#777777] leading-relaxed">
              Our designs feature the finest materials, from radiant gemstones
              to meticulously polished metals, ensuring unparalleled quality and
              lasting brilliance. Whether you're celebrating a special moment or
              adding a touch of elegance to your everyday, our jewelry is
              crafted to be cherished for a lifetime.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Second Section */}
      <div className="max-w-6xl mx-auto px-10 sm:px-16 pb-16 sm:py-10 jost">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: false }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Image Section */}
          <motion.div
            className="bg-gray-100 overflow-hidden h-[450px] sm:h-[500px]"
            variants={fadeIn}
          >
            <div className="relative">
              <img
                src="https://alukas.presslayouts.com/wp-content/uploads/2024/04/home-landing-banner-4.webp"
                alt="Gold leaf hoop earring on model"
                className="object-cover w-full h-[450px] sm:h-[500px]"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-6 md:pl-16 w-full"
            variants={fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl font-prem font-medium  text-gray-600 max-w-56 ">
              It's Always the Right Size
            </h2>

            <p className="text-[#777777] leading-relaxed">
              Every piece is designed with precision and care, making it a
              perfect fit for all occasions. From delicate necklaces that
              complement your elegance to statement earrings that exude
              confidence, our collection offers something special for everyone.
            </p>

            {/* Optional CTA Button */}
            <motion.button
              className="mt-8 bg-gray-900 text-white px-8 py-3  hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Collection
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Section8;
