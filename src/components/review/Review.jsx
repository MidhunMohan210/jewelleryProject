import { useState, useEffect } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";
import { reviewData } from "@/data/reviewData";

function Review() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 640;
      setActiveIndex(isSmallScreen ? 0 : 1);
    };

    // Initialize on mount
    handleResize();

    // Update on resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.activeIndex + (window.innerWidth < 640 ? 0 : 1))
        }
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className={` cursor-pointer jost !pb-14 pt-10 px-6 sm:px-0 transition-all duration-300 h-full  ${
                index === activeIndex
                  ? "scale-[1.03] "
                  : "bg-white-500 scale-75"
              }`}
            >
              <div
                className={`${
                  index === activeIndex
                    ? "bg-[#f1f6f7] shadow-[0_20px_20px_-15px_rgba(59,130,246,0.3)]"
                    : ""
                } p-6 ]`}
              >
                <div className="flex items-center gap-[13px]">
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      {[...Array(review.rating)].map((_, i) => (
                        <HiStar
                          key={i}
                          className="text-yellow-600 w-[18px] h-5"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[13px] leading-7 mt-4 text-grayColor font-[400]">
                  {review.comment}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background-color: #e5e7eb ; /* Tailwind's yellow-500 */
          opacity: 0.5;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #f59e0b; /* Tailwind's yellow-500 */
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default Review;
