/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { GiDiamondHard } from "react-icons/gi";
import { LiaCertificateSolid } from "react-icons/lia";
import { ShieldCheck } from "lucide-react";
import flower from "../../assets/about/flower.png";

function About() {
  // Animation variants
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    viewport: { once: true, margin: "-100px" },
  };

  const fadeIn = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    viewport: { once: true },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    viewport: { once: true, margin: "-100px" },
  };

  const scaleIn = {
    initial: {
      scale: 0.9,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    viewport: { once: true, margin: "-100px" },
  };

  const categories = [
    {
      icon: <GiDiamondHard size={45} />,
      title: "Master Craftsmanship",
      description:
        "Each piece is handcrafted by expert artisans with decades of experience in fine jewelry making",
    },
    {
      icon: <LiaCertificateSolid size={45} />,
      title: "Certified Authenticity",
      description:
        "Every jewel comes with certification guaranteeing the quality and authenticity of materials",
    },
    {
      icon: <ShieldCheck size={43} />,
      title: "Lifetime Guarantee",
      description:
        "Perfect presents for every occasion, wrapped in elegance and sophistication",
    },
  ];

  return (
    <div>
      {/* Banner Section */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1578513492798-0f8a1ac3e1f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
        className="h-[290px] sm:h-[400px] bg-cover bg-center flex flex-col relative text-white px-6 sm:px-8 padding-reverse"
      >
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="absolute bottom-7"
        >
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <IoArrowBackCircleOutline className="opacity-80 text-2xl sm:text-4xl sm:mt-1" />
            <h1 className="text-sm sm:text-xl font-normal">Back to home</h1>
          </motion.div>
          <div className="mt-3 sm:mt-5 ml-1">
            <motion.h1
              variants={fadeInUp}
              className="text-lg sm:text-3xl font-bold"
            >
              About Us
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="max-w-[600px] mt-0.5 sm:mt-2 text-gray-200 text-sm sm:text-base"
            >
             Crafting timeless elegance with a blend of tradition and innovation. Discover our story of passion and precision.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-5 mt-5 sm:mt-10">
        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
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
            className="text-2xl md:text-4xl font-light mb-4 marcellus-regular"
          >
            Heritage of Excellence
            <br />
            Legacy of Beauty
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-xs sm:text-sm outfit max-w-[350px] sm:max-w-[600px]"
          >
            We create more than jewelry - we craft moments that last
            generations. Each piece tells a story of unparalleled craftsmanship
            and timeless elegance.
          </motion.p>
        </motion.div>

        {/* Grid Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Image Section 1 */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <img
              src="https://wdtswarna.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2024/11/Gallery-footer-02.jpg"
              alt="Jewelry crafting process"
              className="w-full h-64 md:h-80 object-cover grayscale"
            />
          </motion.div>

          {/* Text Section 1 */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-4 marcellus-regular">
              Every Piece Tells Your Story
            </h2>
            <p className="text-gray-600 outfit text-sm sm:text-base">
              From the first sketch to the final polish, we pour decades of
              expertise into every creation. Our artisans work with nature's
              finest materials, transforming rare gems and precious metals into
              wearable masterpieces that capture your unique journey.
            </p>
          </motion.div>

          {/* Text Section 2 */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-4 marcellus-regular">
              Artistry in Motion
            </h2>
            <p className="text-gray-600 outfit text-sm sm:text-base">
              Our dedication to excellence shows in every detail. Using
              time-honored techniques passed down through generations, we create
              distinctive pieces that blend classical elegance with contemporary
              vision, ensuring each creation becomes tomorrow's cherished
              heirloom.
            </p>
          </motion.div>

          {/* Image Section 2 */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative order-1 md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1620891203092-971780cc3703?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Model wearing jewelry"
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Categories Section */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        style={{
          backgroundImage: `url(https://caketheme.com/html/mojuri/media/banner/bg-img-2.jpg)`,
        }}
        className="py-16 px-4 padding-reverse"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="text-center px-6 sm:border-r last:border-r-0 border-gray-500 flex flex-col justify-center items-center"
              >
                <motion.div
                  className="w-12 h-12 sm:h-14 sm:w-14 mb-5 text-gray-700"
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-serif mb-4 jost">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed jost sm:text-md">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className=" relative max-w-6xl mx-auto px-4 py-16 overflow-hidden padding-reverse "
      >
        <div className="  absolute sm:h-1/2 sm:w-1/2 sm:top-10 bottom-0 right-[-100px] transform scale-x-[-1]  opacity-[0.17]  pointer-events-none">
          <img src={flower} alt="" className="rotate-[50deg]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-light marcellus-regular"
          >
            Our Story
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-gray-800 text-base md:text-lg outfit"
            >
              For over five decades, we have been crafting stories in precious
              metals and gems. What began as a small artisan workshop has grown
              into a beacon of excellence in fine jewelry making.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-gray-800 text-base md:text-lg outfit"
            >
              Each piece that leaves our atelier carries with it the weight of
              tradition and the lightness of innovation. Our master craftsmen
              bring decades of experience to every creation, ensuring that each
              jewelry piece tells its own unique story.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-gray-800 text-base md:text-lg outfit"
            >
              Today, we continue to push the boundaries of craftsmanship while
              honoring the timeless techniques that have defined our heritage.
              Every creation is a testament to our commitment to excellence and
              our passion for the art of jewelry making.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://dagas.wpbingosite.com/wp-content/uploads/2024/04/Signatire.png"
                alt="Signature"
                className="h-12 sm:h-16 object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
