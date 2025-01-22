import TestimonialForm from "@/components/forms/TestimonialForm";
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/config/api";
import { useLoader } from "@/context/LoaderContext.";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
const AddTestimoniall = (data) => {
  return apiClient.post("/admin/create-testimonial", data);
};

const AddTestimonial = () => {

  const navigate = useNavigate('')
  const { startLoading, stopLoading } = useLoader();
  const { toast } = useToast();
  const { mutate, } = useMutation({
    mutationFn: AddTestimoniall,
    onMutate: () => {
      startLoading();
    },
    onSuccess: () => {
      stopLoading();
      toast({
        title: "Success !",
        description: "Testimonial Added succesfully",
      });
      navigate('/admin/list-Testimonial')

    },
    onError: (error) => {
      stopLoading();
      toast({
        title: "Error !",
        description: error?.response?.data?.message,
      });
    },
  },);

  const onSubmitCreate = (data) => {
    console.log("Submitting data from parent:", data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("position", data.position);
    formData.append("comment", data.comment);
    formData.append("rating", data.rating);
    formData.append("image", data.compressedImage);

    mutate(formData);
  };

  return (
    <div className="">
      {/* Render the Loader if the mutation is in progress */}
      {/* {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      )} */}

      {/* Render the success message */}
      {/* {isSuccess && (
        <p className="text-green-500 text-center font-medium">
          Testimonial submitted successfully!
        </p>
      )} */}

      {/* Render the error message */}
      {/* {isError && (
        <p className="text-red-500 text-center font-medium">
          Error: {error?.message || "Failed to submit the testimonial."}
        </p>
      )} */}

      {/* Render the form if not loading */}
     
        <TestimonialForm onSubmitCreate={onSubmitCreate} mode="create" />
   
    </div>
  );
};

export default AddTestimonial;
