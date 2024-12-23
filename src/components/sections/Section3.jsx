/* eslint-disable react/no-unescaped-entities */
import { GiDiamondRing } from "react-icons/gi";
import bg from '../../assets/section3/WhatsApp Image 2024-12-21 at 23.51.46.jpeg'

const Section3 = () => {
  return (
    <div className="relative w-full mt-[-15px]  bg-yellow-900">
      {/* Background image div with overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          // https://portotheme.com/html/molla/assets/images/demos/demo-25/banners/banner-5.jpg
          backgroundImage: `url('https://portotheme.com/html/molla/assets/images/demos/demo-25/banners/banner-5.jpg')`,
          // backgroundImage: `url('https://img.freepik.com/free-photo/fine-jewelry-promotion-ears-woman_114579-11505.jpg?t=st=1734807471~exp=1734811071~hmac=51aae76e52b540445a807f0acc3b02230340671158443b1ccea7c1488ec91bfc&w=996')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // transform: "rotate(45deg)",
        }}
      >
        {/* <div className="absolute inset-0 bg-white/10" /> */}
        <div className="absolute inset-0 bg-white bg-opacity-5"></div>

      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        {/* Ring icon */}
        <div className="flex justify-center mb-6 text-yellow-600">
          <GiDiamondRing size={30} />
        </div>

        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-headingColor mb-4">
          HIGH QUALITY SINCE 1990
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-500 mb-6">
          Everything you need to complete the perfect collection
        </p>
        {/* <div className=" hidden sm:flex w-[20px] h-[20px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        style={{ enableBackground: "new 0 0 100 100" }}
        xmlSpace="preserve"
      >
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#FFAA00", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g className="wdt-sparkle-loader">
          <path
            className="wdt-sparkle-loader1 wdt-sparkles"
            d="M79,33.9c-1-9-1.9-9.9-10.6-10.9C77.1,21.9,78,21,79,12c1,9,1.9,9.9,10.6,10.9C80.9,24,80,24.9,79,33.9z"
            fill="url(#gold-gradient)"
          />
          <path
            className="wdt-sparkle-loader2 wdt-sparkles"
            d="M18,87.9c-1-9-1.9-9.9-10.6-10.9C16.1,75.9,17,75,18,66c1,9,1.9,9.9,10.6,10.9C19.9,78,19,78.9,18,87.9z"
            fill="url(#gold-gradient)"
          />
          <path
            className="wdt-sparkle-loader3 wdt-sparkles"
            d="M18,33.9c-1-9-1.9-9.9-10.6-10.9C16.1,21.9,17,21,18,12c1,9,1.9,9.9,10.6,10.9C19.9,24,19,24.9,18,33.9z"
            fill="url(#gold-gradient)"
          />
          <path
            className="wdt-sparkle-loader4 wdt-sparkles"
            d="M28.2,35.9c-0.4-3.2-0.7-3.5-3.8-3.9c3.1-0.4,3.4-0.7,3.8-3.9c0.4,3.2,0.7,3.5,3.8,3.9C28.9,32.3,28.6,32.6,28.2,35.9z"
            fill="url(#gold-gradient)"
          />
          <path
            className="wdt-sparkle-loader5 wdt-sparkles"
            d="M28.2,73.9c-0.4-3.2-0.7-3.5-3.8-3.9c3.1-0.4,3.4-0.7,3.8-3.9c0.4,3.2,0.7,3.5,3.8,3.9C28.9,70.3,28.6,70.6,28.2,73.9z"
            fill="url(#gold-gradient)"
          />
          <path
            className="wdt-sparkle-loader6 wdt-sparkles"
            d="M70.2,73.9c-0.4-3.2-0.7-3.5-3.8-3.9c3.1-0.4,3.4-0.7,3.8-3.9c0.4,3.2,0.7,3.5,3.8,3.9C70.9,70.3,70.6,70.6,70.2,73.9z"
            fill="url(#gold-gradient)"
          />
          <path
            className="wdt-sparkle-loader7 wdt-sparkles"
            d="M70.2,35.9c-0.4-3.2-0.7-3.5-3.8-3.9c3.1-0.4,3.4-0.7,3.8-3.9c0.4,3.2,0.7,3.5,3.8,3.9C70.9,32.3,70.6,32.6,70.2,35.9z"
            fill="url(#gold-gradient)"
          />
          <path
            className="wdt-sparkle-loader8 wdt-sparkles"
            d="M79,87.9c-1-9-1.9-9.9-10.6-10.9C77.1,75.9,78,75,79,66c1,9,1.9,9.9,10.6,10.9C80.9,78,80,78.9,79,87.9z"
            fill="url(#gold-gradient)"
          />
          <path
            className="wdt-sparkle-loader9 wdt-sparkles"
            d="M97.5,50C66.1,46.5,53.5,26.3,50,2.5C46.5,26.3,33.9,46.5,2.5,50c31.4,3.5,44,23.8,47.5,47.5C53.5,73.8,66.1,53.5,97.5,50z"
            fill="url(#gold-gradient)"
          />
        </g>
      </svg>
    </div> */}

        {/* Description text */}

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
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
