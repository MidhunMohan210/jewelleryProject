import { motion } from "framer-motion";

function Section1() {
  return (
    <div>
      <div className="text-center  mb-6 mt-12">
        <h2 className=" text-2xl sm:text-3xl philosopher-bold   text-headingColor  ">
          Timeless Treasures
        </h2>
        <p className="text-gray-400 text-sm sm:text-md mt-1">
          Handcrafted jewelry for generations to cherish
        </p>
      </div>
      <div className="bg-white flex flex-wrap px-5 sm:px-10 lg:flex-nowrap lg:h-auto">
        {/* Left Section (Card 1) */}
        <motion.div
          className="w-full lg:w-1/2 p-2 relative group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden">
            <img
              src="https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/team-member-2.jpg"
              alt="Elegant Necklace"
              className="w-full h-[500px] object-cover transform transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 lg:group-hover:opacity-60 transition-opacity duration-300"></div>
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center"
              initial={{ 
                y: 20,
                opacity: window.innerWidth >= 1024 ? 0 : 1 
              }}
              animate={{
                y: 0,
                opacity: window.innerWidth >= 1024 ? 0 : 1
              }}
              whileHover={{ 
                y: 0,
                opacity: 1,
                transition: { duration: 0.9 }
              }}
            >
              <h3 className="text-white text-base lg:text-lg font-bold mb-2
                opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                transition-opacity duration-300">
                Elegant Beige Dress
              </h3>
              <p className="text-white text-xs lg:text-sm mb-4 px-2 text-center
                opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                transition-opacity duration-300">
                A lightweight, stylish beige dress perfect for summer.
              </p>
              <motion.button
                className="bg-transparent border-2 hover:text-gray-900 text-textColor 
                px-3 py-1 lg:px-4 lg:py-2 rounded-md font-medium hover:bg-gray-100 
                text-sm lg:text-base transition-colors duration-300
                opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>
            </motion.div>
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
                src="https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/Gallery-footer-01.jpg"
                alt="Brown Suede Handbag"
                className="w-full h-[240px] object-cover transform transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 lg:group-hover:opacity-60 transition-opacity duration-300"></div>
              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center"
                initial={{ 
                  y: 20,
                  opacity: window.innerWidth >= 1024 ? 0 : 1 
                }}
                animate={{
                  y: 0,
                  opacity: window.innerWidth >= 1024 ? 0 : 1
                }}
                whileHover={{ 
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.9 }
                }}
              >
                <h3 className="text-white text-base lg:text-lg font-bold mb-2
                  opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                  transition-opacity duration-300">
                  Brown Suede Handbag
                </h3>
                <p className="text-white text-xs lg:text-sm mb-4 px-2 text-center
                  opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                  transition-opacity duration-300">
                  A trendy and spacious handbag with braided accents.
                </p>
                <motion.button
                  className="bg-transparent border-2 hover:text-gray-900 text-textColor 
                  px-3 py-1 lg:px-4 lg:py-2 rounded-md font-medium hover:bg-gray-100 
                  text-sm lg:text-base transition-colors duration-300
                  opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
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
                src="https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/Blog-3.jpg"
                alt="Comfort Slip-on Sneakers"
                className="w-full h-[240px] object-cover transform transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-500 via-transparent to-transparent opacity-0 lg:group-hover:opacity-60 transition-opacity duration-300"></div>
              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center"
                initial={{ 
                  y: 20,
                  opacity: window.innerWidth >= 1024 ? 0 : 1 
                }}
                animate={{
                  y: 0,
                  opacity: window.innerWidth >= 1024 ? 0 : 1
                }}
                whileHover={{ 
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.9 }
                }}
              >
                <h3 className="text-white text-base lg:text-lg font-bold mb-2
                  opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                  transition-opacity duration-300">
                  Comfort Slip-on Sneakers
                </h3>
                <p className="text-white text-xs lg:text-sm mb-4 px-2 text-center
                  opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                  transition-opacity duration-300">
                  Stylish and comfortable sneakers for daily wear.
                </p>
                <motion.button
                  className="bg-transparent border-2 hover:text-gray-900 text-textColor 
                  px-3 py-1 lg:px-4 lg:py-2 rounded-md font-medium hover:bg-gray-100 
                  text-sm lg:text-base transition-colors duration-300
                  opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
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
    </div>
  );
}

export default Section1;