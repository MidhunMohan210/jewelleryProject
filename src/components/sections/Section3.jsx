/* eslint-disable react/no-unescaped-entities */
import { GiDiamondRing } from "react-icons/gi";


const Section3 = () => {
  return (
    <div className="relative w-full  bg-yellow-900">
      {/* Background image div with overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
        //   backgroundImage: `url('/api/placeholder/1920/1080')`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        {/* Ring icon */}
        <div className="flex justify-center mb-6 text-yellow-600">
         <GiDiamondRing size={30}/>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-4">
          HIGH QUALITY SINCE 1990
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Everything you need to complete the perfect collection
        </p>

        {/* Description text */}
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          For over three decades, we've been creating masterpieces that celebrate
          life's precious moments. Our commitment to excellence and attention to
          detail has made us a trusted name in fine jewelry since 1990. Each
          piece reflects our dedication to craftsmanship and our passion for
          timeless beauty.
        </p>

        {/* CTA Button */}
        <button className="inline-block px-8 py-3 text-sm uppercase tracking-wider text-amber-700 border-b border-amber-400 hover:text-amber-600 transition-colors duration-300">
          SEE WHAT'S NEW
        </button>
      </div>
    </div>
  );
};

export default Section3;
