/* eslint-disable react/no-unescaped-entities */

const Section4 = () => {
  return (
    <section className="py-16 px-10 bg-white ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left side with image and overlay */}
        <div className="relative w-full sm:w-1/2">
          <div className="relative">
            <img
              src="https://qx-bronza.myshopify.com/cdn/shop/files/since.jpg?v=1732776259&width=832"
              alt="Model wearing jewelry"
              className="w-full object-cover"
            />
          
          </div>
        </div>

        {/* Right side content */}
        <div className="w-full md:w-1/2 space-y-2">
          <p className="text-amber-700 font-semibold text-md sm:text-lg ">
            Timeless elegance in every piece.
          </p>
          <h2 className="text-2xl sm:text-4xl philosopher-bold font-bold text-gray-700">
          Jewelry that reflects your individuality and grace.

          </h2>
          <p className="text-gray-600 leading-relaxed noto-sans text-sm sm:text-md ">
            Each creation is crafted with precision and care, using premium
            materials that ensure lasting quality. When you choose our pieces,
            you're investing in enduring beauty that you can confidently wear
            for years to come. Our dedication to craftsmanship means your
            treasured jewelry will remain as stunning as the day you first wore
            it.{" "}
          </p>
          <button className="bg-amber-700 !mt-5   text-xs sm:text-md text-white px-8 py-3 rounded hover:bg-amber-800 transition-colors">
            SEE MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
