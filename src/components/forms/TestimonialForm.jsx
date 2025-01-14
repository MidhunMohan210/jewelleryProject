import { useState } from "react";
import { Camera } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TestimonialForm = () => {
  const [rating, setRating] = useState(5);

  return (
    <div className="h-full w-full ">
    <Card className="bg-gray-900 text-white border-none   ">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-400 font-bold mb-6">
          Add Testimonial
        </CardTitle>
      </CardHeader>
      <CardContent>
        <style>{`
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          textarea:-webkit-autofill,
          textarea:-webkit-autofill:hover,
          textarea:-webkit-autofill:focus {
            -webkit-text-fill-color: #f3f4f6;
            // -webkit-box-shadow: 0 0 0px 1000px #111827 inset;
            transition: background-color 5000s ease-in-out 0s;
          }
        `}</style>
        <form className="grid grid-cols-1 gap-6 gap-y-3 sm:gap-y-6 ">
          {/* Full Name */}
          <div className="p-2">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              className="block w-full rounded-md border-gray-600 bg-gray-800 !text-white shadow-sm  p-2"
            />
          </div>

          {/* Position/Company */}
          <div className="p-2">
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Position & Company"
              className="block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
            />
          </div>

          {/* Rating */}
          <div className="p-2">
            <label className="block text-sm font-medium mb-2">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="p-2">
            <textarea
              id="comment"
              name="comment"
              rows="4"
              placeholder="Your testimonial"
              className="block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
            />
          </div>

          {/* Image Upload */}
          <div className="p-2">
            <label
              htmlFor="image"
              className="block w-full h-48 border-2 border-dashed border-gray-600 rounded-md cursor-pointer hover:border-gray-500 bg-gray-800"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <Camera className="w-12 h-12 text-gray-400 mb-2" />
                <div className="text-center">
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 mb-2"
                  >
                    Select Image
                  </button>
                  <p className="text-gray-400">or drag and drop</p>
                  <p className="text-gray-500 text-sm mt-1">
                    PNG, JPG, SVG (Max 2MB)
                  </p>
                </div>
              </div>
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="sr-only"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-full mt-6 p-2">
            <button
              type="submit"
              className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-sm"
            >
              Submit Testimonial
            </button>
          </div>
        </form>
      </CardContent>
    </Card>

    </div>
  );
};

export default TestimonialForm;
