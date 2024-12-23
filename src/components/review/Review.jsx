import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";
import { reviewData } from "@/data/reviewData";

function Review() {
  const [activeIndex, setActiveIndex] = useState(1); // Track the active slide index

  return (
    <div className="my-10 py-10">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
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
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex+1)} // Update active index on slide change
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className={`py-[30px] px-7 rounded-[13px] transition-all duration-300 ${
                index === activeIndex
                  ? " shadow-lg scale-100" // Highlighted style
                  : "bg-white scale-75"
              }`}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;
