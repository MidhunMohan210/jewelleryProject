/* eslint-disable react/no-unknown-property */
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { reviewData } from "@/data/reviewData";
import { motion } from "framer-motion";

function Review2() {
  return (
    <div className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Static Section with Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

      <div className="text-center mb-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" ,once: true}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl jost text-headingColor font-semibold"
        >
          A Legacy of Trust
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" ,once: true}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#7777] mt-1 text-sm sm:text-[17px]"
        >
          The experiences that make us proud
        </motion.p>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        className="mySwiper custom-pagination"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <section className="relative isolate overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto max-w-2xl lg:max-w-4xl jost px-8"
              >
                <figure className="mt-10 mb-12 sm:mb-16">
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center text-base leading-8 text-lightTextColor sm:text-xl sm:leading-9"
                  >
                    <p>{review.comment}</p>
                  </motion.blockquote>
                  <motion.figcaption
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-10"
                  >
                    <motion.img
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="mx-auto h-16 w-16 rounded-full object-cover"
                      src={review.image}
                      alt=""
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="mt-4 flex items-center justify-center space-x-3 text-xs sm:text-base"
                    >
                      <div className="font-semibold text-gray-900">
                        {review.name}
                      </div>
                      <svg
                        viewBox="0 0 2 2"
                        width="3"
                        height="3"
                        aria-hidden="true"
                        className="fill-gray-900"
                      >
                        <circle cx="1" cy="1" r="1"></circle>
                      </svg>
                      <div className="text-gray-600">{review.position}</div>
                    </motion.div>
                  </motion.figcaption>
                </figure>
              </motion.div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background-color: #e5e7eb;
          opacity: 0.5;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #f59e0b;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default Review2;
