import React from "react";
import { motion } from "framer-motion";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineClock,
} from "react-icons/hi";
import contactBackground from "../../assets/contact/rb_105557.png";
import contactBackground2 from "../../assets/contact/contact2.png";

function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-50 padding-reverse">
      {/* Header Section */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1578513492798-0f8a1ac3e1f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
        className="h-[300px]  sm:h-[400px] bg-cover bg-center flex flex-col justify-end relative text-white px-6 sm:px-8"
      >
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-6 sm:left-8"
        >
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <IoArrowBackCircleOutline className="text-3xl sm:text-4xl" />
            <h1 className="text-base sm:text-lg font-normal">Back to home</h1>
          </motion.div>
          <div className="mt-4">
            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-4xl font-bold"
            >
              Contact Us
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="max-w-lg mt-2 text-gray-300 text-sm sm:text-base"
            >
              We craft timeless elegance with precision and passion. Our
              exquisite collection blends traditional artistry with modern
              designs, celebrating life's special moments.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Form Section   */}
      <div
        style={
          {
            // backgroundImage: `url(${contactBackground})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
          }
        }
        className=" py-16 relative  lg:px-8 overflow-hidden"
      >
          {/* Animated Flower Image */}
          <div className="absolute  top-10  flex justify-center items-center pointer-events-none">
            <img
              src={contactBackground2}
              alt="Flower"
              className="h-[800px] opacity-20 rotate-[-20deg] animate-sway top-10 "
            />
          </div >

          <div className=" px-4 sm:px-6 max-w-5xl lg:px-8 mx-auto">
          {/* Form Content */}
          <h1
            className="text-3xl sm:text-4xl font-bold text-headingColor  text-center mb-8 relative z-10"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Keep In Touch with Us
          </h1>
          <p className="text-center text-gray-600 mb-6 relative z-10">
            Our Customer Care team is available Monday – Friday, 9am to 5pm IST.
            <br />
          </p>
          <p className="text-center text-gray-600 mb-10 relative z-10">
            Contact us on +12 (0)20 654 4522 or use the form below to email us.
            Response times may take up to 48 hours during busy periods.
          </p>
          <div className="relative z-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name*"
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your email*"
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Your phone (optional)"
                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message..."
                className="border border-gray-300 p-3 w-full h-32 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          </div>
      </div>

      {/* Location, Contact Info, and Business Hours Section */}
      <div 
      style={{
        backgroundImage: `url(https://caketheme.com/html/mojuri/media/banner/bg-img-2.jpg)`,
      }}
      
      className=" py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {/* Store Location */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-col items-center group transition-all duration-1000 border-r-0  sm:border-r-2 ease-in-out transform hover:scale-110"
            >
              <HiOutlineLocationMarker className="text-5xl text-gray-500 mb-4 animate-sway-bounce transform-transition cursor-pointer group-hover:text-gray-700 transition-colors " />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-700 transition-colors duration-300 ease-in-out">
                OUR STORE
              </h3>
              <p className="text-gray-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                7021 Washington SQ.
                <br />
                South New York, NY 10012
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex jost flex-col items-center group transition-all duration-1000 border-r-0  sm:border-r-2  ease-in-out transform hover:scale-110"
            >
              <HiOutlinePhone className="text-5xl text-gray-500 mb-4 animate-sway-bounce group-hover:text-gray-700 transition-colors duration-300 ease-in-out" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-700 transition-colors duration-300 ease-in-out">
                CONTACT INFO
              </h3>
              <p className="text-gray-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Telephone: 703.172.3412
                <br />
                E-mail: hello@example.com
              </p>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-col items-center group transition-all duration-1000 border-r-0  sm:border-r-2 ease-in-out transform hover:scale-110"
            >
              <HiOutlineClock className="text-5xl text-gray-500 mb-4 animate-sway-bounce group-hover:text-gray-700 transition-colors duration-300 ease-in-out" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-700 transition-colors duration-300 ease-in-out">
                BUSINESS HOURS
              </h3>
              <p className="text-gray-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Monday - Sunday:
                <br />
                09:00 am - 20:00 pm
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-200 ">
        <div className=" ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31189.333921346508!2d75.3471562953547!3d12.270817080947394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba45d9e2fbe89ab%3A0xafa5be5105111138!2sCherupuzha%2C%20Kerala%20670511!5e0!3m2!1sen!2sin!4v1735989480954!5m2!1sen!2sin"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: "0", filter: "grayscale(100%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cherupuzha, Kerala Map"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
