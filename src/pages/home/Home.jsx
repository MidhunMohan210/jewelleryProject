import Section3 from "@/components/sections/Section3";
import { Banner } from "../../components/banner/Banner";
import Section1 from "../../components/sections/Section1";
import Section2 from "../../components/sections/Section2";
import CarouselComponent from "@/components/carousel/CarouselComponent";
import GetInTouch from "@/components/footer/GetInTouch";
import Section6 from "@/components/sections/Section6";
import Section5 from "@/components/sections/Section5";

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
    

      <main className="pt-16">
        {/* Add some content to enable scrolling */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-gray-100 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Section {i + 1}</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

        {/* A section component with some dummy content */}
        <Section6 />
        <Section5 />
      <GetInTouch />
    </>
  );
}

export default Home;
