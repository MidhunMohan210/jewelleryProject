import React from 'react';

function Section4() {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center mb-7 p-6 lg:p-16 space-y-12 lg:space-y-0 min-h-screen bg-white">
      {/* Left Section */}
      <div className="text-center lg:text-left max-w-md">
        {/* <p className="text-red-500 text-sm font-bold tracking-wider">SPECIAL</p> */}
        <h1 className="text-4xl font-bold text-headingColor mt-2">Refine Your Style.</h1>
        <p className="text-gray-500 text-base mt-4 leading-relaxed">
          Get on our exclusive email list and be the first to hear about sales, coupons, new arrivals, and more!
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-8 gap-8">
          {/* Product Card 1 */}
          <div className="text-center">
            <img
              src="https://img.freepik.com/free-photo/celebrate-sunset-beach-creative-gemstone_1232-3550.jpg?ga=GA1.1.861024462.1723481111&semt=ais_hybrid"
              alt="Rib-knit cardigan"
              className="w-[200px] h-[300px] object-cover mx-auto shadow-md"
            />
            <p className="mt-4 text-headingColor font-medium">Rib-knit cardigan</p>
            <p className="text-gray-500 text-sm font-semibold">$24.99</p>
          </div>

          {/* Product Card 2 */}
          <div className="text-center">
            <img
              src="https://img.freepik.com/free-photo/render-diamond-crown-expensive-grind_1232-3549.jpg?ga=GA1.1.861024462.1723481111&semt=ais_hybrid"
              alt="Linen-blend trousers"
              className="w-[200px] h-[300px] object-cover mx-auto shadow-md"
            />
            <p className="mt-4 text-headingColor font-medium">Linen-blend trousers</p>
            <p className="text-gray-500 text-sm font-semibold">$19.99</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative max-w-lg">
        <img
          src="https://img.freepik.com/free-photo/side-view-pair-silver-diamond-earrings-with-emerald-black-wall-black_140725-12860.jpg?t=st=1734936228~exp=1734939828~hmac=d7534c8936af9259b90fdc3e50a29ab366440f04136bf6f8bd7ee02ba8e6e904&w=360"
          alt="Model wearing rib-knit cardigan and linen-blend trousers"
          className="w-[600px] h-[600px] object-cover rounded-lg shadow-lg"
        />
         <div className="absolute inset-8 rounded-md bg-white bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
          <p className="text-white text-lg font-bold text-center">Casual basics and trendy key pieces.</p>
          <p className="text-white mt-4 text-sm uppercase tracking-wide text-center">IN THIS LOOK</p>
          <ul className="text-white mt-4 text-sm text-center">
            <li>• Rib-knit cardigan</li>
            <li>• Linen-blend paper bag trousers</li>
          </ul>
          <p className="text-white mt-6 text-center text-lg font-bold">$19.99 - $48.00</p>
          <button className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow hover:bg-gray-100 transition">
            BUY ALL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section4;
