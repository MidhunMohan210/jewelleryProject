import Section3 from "@/components/sections/Section3";
import { Banner } from "../../components/banner/Banner";
import Section1 from "../../components/sections/Section1";
import Section2 from "../../components/sections/Section2";
import CarouselComponent from "@/components/carousel/CarouselComponent";
import GetInTouch from "@/components/footer/GetInTouch";
import Section6 from "@/components/sections/Section6";

import Section5 from "@/components/sections/Section5";

import Section4 from '@/components/sections/Section4'


function Home() {
  return (
    <>
      {/* A hero banner section with a background image and text */}
      <Banner />
      {/* A carousel component with some dummy content */}
      <hr className="mt-1" />
      <CarouselComponent />
      {/* <hr /> */}

      {/* A section component with some dummy content */}
      <Section1 />
      {/* A section component with some dummy content */}
      <Section2 />
      {/* A section component with some dummy content */}
      <Section3 />
    

     

      <Section4/>

        {/* A section component with some dummy content */}
        <Section6 />
        <Section5 />
      <GetInTouch />
    </>
  );
}

export default Home;
