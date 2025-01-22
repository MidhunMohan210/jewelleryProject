/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { Camera, } from "lucide-react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import imageCompression from "browser-image-compression";

const TestimonialForm = ({ onSubmitCreate, mode, onSubmitEdit, productDetail }) => {
  const [rating, setRating] = useState(5);
  const [compressedImage, setCompressedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [cropData, setCropData] = useState(null);
  const [cropper, setCropper] = useState(null);
  const [backendImage, setBackendImage] = useState(null);
  const [isImageModified, setIsImageModified] = useState(false);
  const [showCropper, setShowCropper] = useState(false);
  const cropperRef = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (productDetail) {
      setValue("name", productDetail.name || "");
      setValue("position", productDetail.position || "");
      setValue("comment", productDetail.testimonial || "");
      setRating(productDetail.rating || 5);
      
      if (productDetail.image) {
        setBackendImage(productDetail.image);
        setCropData(productDetail.image);
        setIsImageModified(false);
      }
    } else {
      reset();
      setRating(5);
      setCompressedImage(null);
      setImagePreview(null);
      setCropData(null);
      setBackendImage(null);
      setIsImageModified(false);
      setShowCropper(false);
    }
  }, [productDetail, setValue, reset]);

  const onSubmit = (data) => {
    console.log(compressedImage,'imagee')

    if (mode === 'create' && !compressedImage) {
      return;
    }

    const dataa = {
      ...data,
      rating,
      ...(isImageModified ? { compressedImage } : {})
    };

    if (mode === 'create') {
      onSubmitCreate(dataa);
    } else if (mode === 'edit') {
      onSubmitEdit(dataa);
    }
  };

  const handleFileSelect = async (file) => {
    if (!file) return;

    setIsImageModified(true);
    setCropData(null);
    setCompressedImage(null);

    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
    setShowCropper(true);
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
          const compressedFile = await imageCompression(blob, {
            maxSizeMB: 0.5,             // Limit file size to 0.5MB
            maxWidthOrHeight: 1024,     // Resize image to fit within 1024px
            useWebWorker: true,         // Use Web Worker for better performance
            fileType: "image/webp",     // WebP format for better compression
            quality: 0.5,               // Reduce quality further to lower file size
          });
          
          setCompressedImage(compressedFile);
          setCropData(croppedCanvas.toDataURL());
          setShowCropper(false);
          setIsImageModified(true);
        }
      });
    }
  };

  const handleDiscardChanges = () => {
    if (backendImage) {
      setCropData(backendImage);
      setImagePreview(null);
      setCompressedImage(null);
      setIsImageModified(false);
    } else {
      setImagePreview(null);
      setCropData(null);
      setCompressedImage(null);
      setIsImageModified(false);
    }
    setShowCropper(false);
  };

  const handleEditExistingImage = () => {
    if (backendImage) {
      setImagePreview(backendImage);
      setShowCropper(true);
    }
  };

  return (
    <div className="h-screen w-full">
      <Card className="bg-gray-900 text-white border-none">
        {/* <CardHeader>
          <CardTitle className="text-2xl text-gray-400 font-bold mb-6">
            {mode === "create" ? "Add Testimonial" : "Edit Testimonial"}
          </CardTitle>
        </CardHeader> */}
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
              {showCropper ? (
                <div className="space-y-4">
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
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handleCrop}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-sm"
                    >
                      Crop Image
                    </button>
                    <button
                      type="button"
                      onClick={handleDiscardChanges}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-sm"
                    >
                      Discard Changes
                    </button>
                    {/* <label
                      htmlFor="image"
                      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-sm cursor-pointer flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Choose Different Image
                    </label> */}
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <label
                    htmlFor="image"
                    className="block w-full h-48 border-2 border-dashed border-gray-600 rounded-md cursor-pointer hover:border-gray-500 bg-gray-800"
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      {cropData ? (
                        <div className="relative w-full h-full">
                          <img
                            src={cropData}
                            alt="Cropped Preview"
                            className="h-full w-full object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                            <div className="flex gap-2">
                              {mode === 'edit' && !isImageModified ? (
                                <button
                                  type="button"
                                  onClick={handleEditExistingImage}
                                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                                >
                                  Edit Image
                                </button>
                              ) : (
                                <>
                                  {isImageModified && (
                                    <button
                                      type="button"
                                      onClick={handleDiscardChanges}
                                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                    >
                                      Reset
                                    </button>
                                  )}
                                  <label
                                    htmlFor="image"
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
                                  >
                                    Change Image
                                  </label>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
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
                </div>
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
               {!compressedImage && (
                <span className="text-red-500 mt-5">Please select an Image</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="col-span-full mt-6 p-2">
              <button
                type="submit"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-sm"
                disabled={isSubmitting}
              >
                {mode === "create" ? "Submit Testimonial" : "Update Testimonial"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialForm;