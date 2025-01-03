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

function Home() {
  return (
    <>
      {/* A hero banner section with a background image and text */}
      <Banner />
      {/* A carousel component with some dummy content */}
      <hr className="mt-1" />
      <CarouselComponent />
      {/* <hr /> */}
      <div className="flex flex-col gap-6 mt-3">
        {/* A section component with some dummy content */}
        <Section1 />
        {/* A section component with some dummy content */}
        <Section2 />
        {/* <Sectiont7 /> */}

        {/* A section component with some dummy content */}
        <Section3 />

        <Section4 />

        {/* A section component with some dummy content */}
        <Section6 />
        <Section5 />
      </div>

      <GetInTouch />
    </>
  );
}

export default Home;
