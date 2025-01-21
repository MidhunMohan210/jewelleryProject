/* eslint-disable react/prop-types */
import apiClient from "@/config/api";
import { Button } from "../ui/Button";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useLoader } from "@/context/LoaderContext.";
import { useToast } from "@/hooks/use-toast";

function InputSection({ title }) {
  const { startLoading, stopLoading } = useLoader();
  const { toast } = useToast();
  const formType = title?.toLowerCase() || "";

  /// configure hook form

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  /// api calls
  /// for post data

  const postSubDetails = async (payload) => {
    console.log(payload);

    const { data } = await apiClient.post("/admin/create-subdetails", payload, {
      params: { type: formType?.toLowerCase() },
    }); // Payload sent in request body
    return data;
  };


  // const editSubDetails = async (payload) => {
  //   const { data } = await apiClient.put("/admin/edit-subdetails", payload);
  //   return data;
  // };

  // const deleteSubDetails = async (id) => {
  //   const { data } = await apiClient.delete(`/admin/delete-subdetails/${id}`);
  //   return data;
  // };

  /// configure react query for fetching data






  /// configure react query mutation
  const { mutate: postMutation } = useMutation({
    mutationFn: postSubDetails,

    onMutate: () => {
      startLoading();
    },
    onSuccess: () => {
      stopLoading();
      reset();
    },
    onError: (error) => {
      stopLoading();
      toast({
        title: "Error !",
        description: error?.response?.data?.message,
      });
    },
  });

  const onSubmit = (data) => {
    postMutation(data);
  };

  

  return (
    <>
      <div className="h-[250px] bg-[#513cac] flex items-center justify-center">
        <div className="p-2 w-full flex flex-col items-center justify-center gap-5">
          <p className="font-bold text-md sm:text-xl text-gray-200">
            ADD YOUR DESIRED {title?.toUpperCase()}
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center gap-5"
          >
            <div className="w-3/4 sm:w-1/2 relative flex flex-col items-center">
              <input
                type="text"
                placeholder={`Enter ${title}`}
                className="block w-full rounded-full bg-gray-300 text-black shadow-sm p-2 px-6"
                {...register("name", {
                  required: `${title} is required`,
                  minLength: {
                    value: 5,
                    message: "Must be at least 5 characters",
                  },
                })}
              />
              {errors?.name && (
                <p className="text-red-400 text-sm mt-2 ml-4">
                  {errors?.name?.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-gray-800 !rounded-full px-8 hover:bg-gray-900"
            >
              <p className="text-white">Submit</p>
            </Button>
          </form>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-500 mt-0.5"></div>
    </>
  );
}

export default InputSection;
