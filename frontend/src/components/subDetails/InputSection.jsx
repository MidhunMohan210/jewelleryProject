/* eslint-disable react/prop-types */
import { Button } from "../ui/Button";

function InputSection({ title }) {
  return (
    <>
      <div className="h-[250px] bg-[#513cac] flex items-center justify-center border-t rounded-t-sm ">
        {/* Position */}
        <div className="p-2 w-full flex  flex-col items-center justify-center gap-5">
          <p className="font-bold text-md sm:text-xl text-gray-200">
            ADD YOUR DESIRED {title?.toUpperCase()}
          </p>
          <input
            type="text"
            placeholder="Enter Category"
            className="block w-3/4 sm:w-1/2   rounded-full bg-gray-300 text-black  shadow-sm p-2 px-6"
          />
          <Button className="bg-gray-800 !rounded-full px-8">
            <p className="text-white">Submit</p>
          </Button>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-500 mt-0.5"></div>
    </>
  );
}

export default InputSection;
