import necklace1 from "../../assets/section1/beautiful-luxury-necklace-jewelry-stand-neck.jpg";
import image1 from "../../assets/section1/pexels-judy-sengsone-235902-750148.jpg";
import { motion } from "framer-motion";

function Section1() {
  return (
    <div className="bg-white flex flex-wrap p-5 sm:p-16 lg:flex-nowrap lg:h-auto">
      {/* Left Section (Card 1) */}
      <motion.div
        className="w-full lg:w-1/2 p-2 relative group"
        initial={{ opacity: 0, x: -30 }} // Start position
        whileInView={{ opacity: 1, x: 0 }} // Animate to visible position
        // viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% in view
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden ">
          <img
            // src={necklace1}
            src={
              "https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/team-member-2.jpg"
            }
            alt="Elegant Necklace"
            className="w-full h-[500px] object-cover transform  transition-transform duration-300"
          />
          <div className="   absolute inset-0  group-hover:opacity-60 transition-opacity duration-300"></div>
          <div>
            <motion.div
              className="absolute  inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 0 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3
                className="text-white text-lg font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                //   viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Elegant Beige Dress
              </motion.h3>
              <motion.p
                className="text-white text-sm mb-4 px-2 text-center "
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                //   viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                A lightweight, stylish beige dress perfect for summer.
              </motion.p>
              <motion.button
                className="bg-transparent border-2 hover:text-gray-900 text-textColor px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Right Section (Cards 2 and 3) */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Card 2 */}
        <motion.div
          className="w-full p-2 relative group flex-1"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative overflow-hidden h-full">
            <img
              src={
                "https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/Gallery-footer-01.jpg"
              }
              alt="Brown Suede Handbag"
              className="w-full h-[240px] object-cover transform transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-white text-lg font-bold mb-2">
                Brown Suede Handbag
              </h3>
              <p className="text-white text-sm mb-4 px-2 text-center">
                A trendy and spacious handbag with braided accents.
              </p>
              <motion.button

                className="bg-transparent border-2 hover:text-gray-900 text-textColor px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>

            </motion.div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="w-full p-2 relative group flex-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative overflow-hidden h-full">
            <img
              src={
                "https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/Blog-3.jpg"
              }
              alt="Comfort Slip-on Sneakers"
              className="w-full h-[240px] object-cover transform  transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-500 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-white text-lg font-bold mb-2">
                Comfort Slip-on Sneakers
              </h3>
              <p className="text-white text-sm mb-4 px-2 text-center">
                Stylish and comfortable sneakers for daily wear.
              </p>
              <motion.button

                className="bg-transparent border-2 hover:text-gray-900 text-textColor px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Section1;
