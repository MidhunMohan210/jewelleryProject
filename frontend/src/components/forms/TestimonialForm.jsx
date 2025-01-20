import { useState, useRef,useEffect } from "react";
import { Camera } from "lucide-react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useMutation } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import imageCompression from "browser-image-compression";
import axios from "axios";


// const AddTestimonial = (data)=>{
//   return axios.post('http://localhost:7008/admin/create-testimonial',data)
// }

const TestimonialForm = ({onSubmitCreate,mode,onSubmitEdit,productDetail}) => {
  const [rating, setRating] = useState(5);
  const [compressedImage, setCompressedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [cropData, setCropData] = useState(null);
  const [cropper, setCropper] = useState(null);
  const cropperRef = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {

    console.log(productDetail,'productss')
    if (productDetail) {
      setValue("name", productDetail.name || ""); // Default name
      setValue("position", productDetail.position || ""); // Default position
      setValue("comment", productDetail.testimonial || ""); // Default comment
      setRating(productDetail.rating || 5); // Default rating
      if (productDetail.image) {
        setCropData(productDetail.image); 
      }
    } else {
     
      reset();
      setRating(5);
      setCompressedImage(null);
      setImagePreview(null);
      setCropData(null);
    }
  }, [productDetail, setValue, reset]);

  const onSubmit = (data) => {
    console.log('Submitting data:', data);
   const dataa = {...data,rating,compressedImage}

    
console.log(dataa,'dataaaaaff')
if(mode === 'create'){
  onSubmitCreate(dataa)

}else if (mode === 'edit'){

  console.log(dataa,'data inside edit submit')
  onSubmitEdit(dataa)
}

    // mutate(formData);
};


  const handleFileSelect = async (file) => {
    if (!file) return;

    // Reset previous crop and compressed image data
    setCropData(null);
    setCompressedImage(null);

    // Show the new image for cropping
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  const handleCrop = async () => {
    if (cropper) {
      const croppedCanvas = cropper.getCroppedCanvas({
        width: 1024,
        height: 1024,
        imageSmoothingQuality: "high",
      });

      croppedCanvas.toBlob(async (blob) => {
        if (blob) {
          // Compress the cropped image
          const compressedFile = await imageCompression(blob, {
            maxSizeMB: 1,
            maxWidthOrHeight: 1024,
            useWebWorker: true,
            fileType: "image/webp",
          });

          // Update state with the cropped and compressed image
          setCompressedImage(compressedFile);
          setCropData(croppedCanvas.toDataURL());
        }
      });
    }
  };

  return (
    <div className="h-screen w-full">
      <Card className="bg-gray-900 text-white border-none">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-400 font-bold mb-6">
          {mode === "create" ? "Add Testimonial" : "Edit Testimonial"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 gap-y-3 sm:gap-y-6"
          >
            {/* Full Name */}
            <div className="p-2">
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 5,
                    message: "Name must be at least 5 characters long",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name must not exceed 50 characters",
                  },
                })}
                placeholder="Full Name"
                className="block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm p-2"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            {/* Position */}
            <div className="p-2">
              <input
                type="text"
                {...register("position", {
                  required: "Position is required",
                  minLength: {
                    value: 5,
                    message: "Position must be at least 5 characters long",
                  },
                  maxLength: {
                    value: 100,
                    message: "Position must not exceed 100 characters",
                  },
                })}
                placeholder="Position & Company"
                className="block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm p-2"
              />
              {errors.position && (
                <span className="text-red-500">{errors.position.message}</span>
              )}
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
              {rating < 1 && (
                <span className="text-red-500">Please select a rating</span>
              )}
            </div>

            {/* Testimonial */}
            <div className="p-2">
              <textarea
                {...register("comment", {
                  required: "Testimonial is required",
                  minLength: {
                    value: 10,
                    message: "Testimonial must be at least 10 characters long",
                  },
                  maxLength: {
                    value: 300,
                    message: "Testimonial must not exceed 300 characters",
                  },
                })}
                rows={4}
                placeholder="Your testimonial"
                className="block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm p-2"
              />
              {errors.comment && (
                <span className="text-red-500">{errors.comment.message}</span>
              )}
            </div>

            {/* Image Upload */}
            <div className="p-2">
              {imagePreview && !cropData ? (
                <>
                  <Cropper
                    src={imagePreview}
                    style={{ height: 400, width: "100%" }}
                    initialAspectRatio={1}
                    guides={true}
                    viewMode={2}
                    background={false}
                    responsive={true}
                    ref={cropperRef}
                    onInitialized={(instance) => setCropper(instance)}
                  />
                  <button
                    type="button"
                    onClick={handleCrop}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded-sm"
                  >
                    Crop Image
                  </button>
                </>
              ) : (
                <label
                  htmlFor="image"
                  className="block w-full h-48 border-2 border-dashed border-gray-600 rounded-md cursor-pointer hover:border-gray-500 bg-gray-800"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    {cropData ? (
                      <img
                        src={cropData}
                        alt="Cropped Preview"
                        className="h-full object-cover rounded-lg"
                      />
                    ) : (
                      <>
                        <Camera className="w-12 h-12 text-gray-400 mb-2" />
                        <p className="text-gray-400">Select Image</p>
                        <p className="text-gray-500 text-sm mt-1">
                          PNG, JPG, SVG (Max 2MB)
                        </p>
                      </>
                    )}
                  </div>
                </label>
              )}
              <input
                id="image"
                type="file"
                accept="image/*"
                className="absolute w-0 h-0"
                onChange={(e) => {
                  if (e.target.files?.length) {
                    handleFileSelect(e.target.files[e.target.files.length - 1]);
                  }
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-full mt-6 p-2">
              <button
                type="submit"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-sm"
                disabled={isSubmitting}
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
