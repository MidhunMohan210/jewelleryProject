import Section3 from "@/components/sections/Section3";
import { Banner } from "../../components/banner/Banner";
import Section1 from "../../components/sections/Section1";
import Section2 from "../../components/sections/Section2";
import CarouselComponent from "@/components/carousel/CarouselComponent";
import GetInTouch from "@/components/footer/GetInTouch";
import Section6 from "@/components/sections/Section6";

import Section5 from "@/components/sections/Section5";

import Section4 from "@/components/sections/Section4";
import Sectiont7 from "@/components/sections/Sectiont7";
import Section8 from "@/components/sections/Section8";

function Home() {
  return (
    <>
      {/* A hero banner section with a background image and text */}
      <Banner />
      {/* A carousel component with some dummy content */}
      <CarouselComponent />
      <div className="flex flex-col gap-6 mt-3">
        {/* first section with photo and text  */}

        <Section1 />
        <hr className="mx-16 sm:mx-32 border my-5 mt-10" />
        {/* A section component with some dummy content */}
        <Section2 />

        {/* <Sectiont7 /> */}

        {/* A section component with some dummy content */}
        {/* <Section3 /> */}

        {/* <Section4 /> */}

        <hr className="mx-16 sm:mx-32 border my-5 mt-10" />

        <Section8 />

        {/* A section component with some dummy content */}
        <Section6 />
        <hr className="mx-16 sm:mx-32 border my-2 " />

        <Section5 />
      </div>

      {/* <GetInTouch /> */}
    </>
  );
}

export default Home;
