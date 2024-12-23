import React from 'react';

const Section4 = () => {
  return (
    <section className="py-16 px-10 bg-white ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left side with image and overlay */}
        <div className="relative w-full md:w-1/2">
          <div className="relative">
            <img 
              src="https://qx-bronza.myshopify.com/cdn/shop/files/since.jpg?v=1732776259&width=832"
              alt="Model wearing jewelry"
              className="w-full object-cover"
            />
            {/* Overlay card
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white p-6 rounded-lg text-center w-4/5">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-2xl font-semibold mb-2">Since 1998</div>
              <p className="text-sm">
                Discover timeless elegance with our stunning sapphire pendant necklace, featuring a brilliant blue stone.
              </p>
            </div> */}
          </div>
        </div>
        
        {/* Right side content */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-amber-700 font-medium">Radiant gemstone beauty.</p>
          <h2 className="text-4xl philosopher-bold font-bold text-gray-700">
            Jewels that celebrate your unique beauty and style.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We believe in creating jewellery that lasts. Each piece is made from high-quality materials, ensuring durability and timeless beauty. Our commitment to excellence means you can wear your favourite pieces with confidence, knowing they'll withstand the test of time.
          </p>
          <button className="bg-amber-700 text-white px-8 py-3 rounded hover:bg-amber-800 transition-colors">
            SEE MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section4;