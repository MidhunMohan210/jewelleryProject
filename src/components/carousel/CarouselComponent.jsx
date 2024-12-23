import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { carouselText } from "../../data/carouselText";
import Autoplay from "embla-carousel-autoplay";

function CarouselComponent() {
  return (

    <div className="w-full">

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full sm:py-8"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="flex gap-5 sm:gap-5 items-center">
          {carouselText.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center basis-1/2 sm:basis-1/3 md:basis-1/4 cursor-pointer"
            >
              <div
                className="text-center transform transition-all duration-300 text-headingColor hover:text-[#b69121] hover:scale-105 "
                style={{ fontFamily: item.fontFamily }}
              >
                <h2 className={item.className}>{item.text}</h2>
                <div className="mt-2 flex justify-center">
                  <div className="w-16 h-0.5 bg-gray-300"></div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
