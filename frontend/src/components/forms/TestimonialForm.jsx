import { useState } from "react";
import { Camera } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import imageCompression from "browser-image-compression";

const TestimonialForm = () => {
  const [rating, setRating] = useState(5);
  const [compressedImage, setCompressedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); 
  const { register, handleSubmit, setValue,formState:{errors,isSubmitting} } = useForm();

  const onSubmit = (data) => {
    const formData = { ...data, rating, image: compressedImage };
    console.log(formData, "Final Form Data");
  };

  const handleFileCompression = async (file) => {
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
        fileType: "image/webp",
      };
      const compressedFile = await imageCompression(file, options);
      setCompressedImage(compressedFile);
      setImagePreview(URL.createObjectURL(compressedFile)); // Set preview URL
    } catch (error) {
      console.error("Image compression error:", error);
    }
  };

  console.log(errors,'eror')
  return (
    <div className="h-screen w-full">
      <Card className="bg-gray-900 text-white border-none">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-400 font-bold mb-6">
            Add Testimonial
          </CardTitle>
        </CardHeader>
        <CardContent>
        <style>
{`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {
    -webkit-text-fill-color: #f3f4f6;
    -webkit-box-shadow: 0 0 0px 1000px #111827 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`}
</style>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 gap-y-3 sm:gap-y-6"
          >
            <div className="p-2">
              <input
                type="text"
                
                {...register("name",{
                  required :'Name is required',
                  validate:(value)=>{
                    if(value.length <5){
                      return 'Name must be at least 5 characters long'
                    }
                    return true
                  }
                })}
                placeholder="Full Name"
                className="block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm p-2"
              />
            </div>

            {errors.name && <span className="text-red-500">{errors.name}</span>}

            <div className="p-2">
              <input
                type="text"
                required='position is required'

                {...register("position")}
                placeholder="Position & Company"
                className="block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm p-2"
              />
            </div>

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

            <div className="p-2">
              <textarea
                {...register("comment")}
                rows={4}
                placeholder="Your testimonial"
                className="block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm p-2"
              />
            </div>

            <div className="p-2">
              <label
                htmlFor="image"
                className="block w-full h-48 border-2 border-dashed border-gray-600 rounded-md cursor-pointer hover:border-gray-500 bg-gray-800"
                onDragOver={(e) => e.preventDefault()}
                onDrop={async (e) => {
                  e.preventDefault();
                  const files = e.dataTransfer.files;
                  if (files.length) {
                    await handleFileCompression(files[0]);
                    setValue("image", files[0]);
                  }
                }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-full object-cover rounded-lg"
                    />
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={async (e) => {
                  if (e.target.files?.length) {
                    await handleFileCompression(e.target.files[0]);
                  }
                }}
              />
            </div>

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
