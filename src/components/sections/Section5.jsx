import Review from "../review/Review";

function Section5() {
  return (
    <div className="py-10 sm:py-16 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl  jost text-headingColor font-semibold ">
        A Legacy of Trust
        </h2>
        <p className="text-[#7777] mt-1 text-sm sm:text-[17px]">The experiences that make us proud</p>
      </div>
      <Review />
    </div>
  );
}

export default Section5;
