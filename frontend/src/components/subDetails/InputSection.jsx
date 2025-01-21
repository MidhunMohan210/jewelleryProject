/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLoader } from "@/context/LoaderContext.";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/Button";
import SubDetailSkeleton from "../skeleton/SubDetailSkeleton";
import apiClient from "@/config/api";
import { Edit, Trash2 } from "lucide-react";
import NotFound1 from "../notFound/NotFound1";

function InputSection({ title }) {
  const { startLoading, stopLoading } = useLoader();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const formType = title?.toLowerCase() || "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  // API calls with error handling
  const getSubDetails = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { data } = await apiClient.get("/admin/get-subdetails", {
        params: { type: formType.toLowerCase() },
      });
      return data;
    } catch (error) {
      throw new Error(
        error?.response?.data?.message || "Failed to fetch details"
      );
    }
  };

  const postSubDetails = async (payload) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const { data } = await apiClient.post(
        "/admin/create-subdetails",
        payload,
        {
          params: { type: formType },
        }
      );
      return data;
    } catch (error) {
      throw new Error(
        error?.response?.data?.message || "Failed to create details"
      );
    }
  };

  // Query configuration
  const {
    isPending,
    isError: isFetchError,
    data: subDetails,
    error: fetchError,
    refetch,
  } = useQuery({
    queryKey: ["subDetails", formType],
    queryFn: getSubDetails,
    retry: 1,
    enabled: !!formType,
  });

  // Mutation configuration
  const { mutate: postMutation } = useMutation({
    mutationFn: postSubDetails,
    onMutate: () => {
      startLoading();
    },
    onSuccess: (response) => {
      stopLoading();
      reset();
      // queryClient.invalidateQueries(["subDetails", formType]);
      const newData = response.data; // Extract the `data` field from the response

      queryClient.setQueryData(["subDetails", formType], (oldQueryData) => {
        // Handle case where oldQueryData is null/undefined
        if (!oldQueryData) {
          return { data: [newData] };
        }

        // Handle case where oldQueryData.data might not be an array
        const previousData = Array.isArray(oldQueryData.data)
          ? oldQueryData.data
          : [];

        return {
          ...oldQueryData,
          data: [...previousData, newData],
        };
      });
      toast({
        title: "Success!",
        description: `${title} added successfully`,
        variant: "success",
      });
    },
    onError: (error) => {
      stopLoading();
      toast({
        title: "Error!",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data) => {
    if (isSubmitting) return;
    postMutation(data);
  };

  // Error UI
  if (isFetchError) {
    return (
      <div className="text-red-500 p-4 text-center">
        <p>Error: {fetchError?.message}</p>
        <Button
          onClick={() => refetch()}
          className="mt-2 bg-gray-800 hover:bg-gray-900"
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <>
      <section className="sticky top-0 z-10 ">
        <div className="h-[250px] bg-[#513cac] flex items-center justify-center border-b-2 border-gray-400">
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
                  className={`block w-full rounded-full shadow-sm p-2 px-6 ${
                    errors?.name
                      ? "border-2 border-red-500 bg-red-50"
                      : "bg-gray-300"
                  } text-black`}
                  disabled={isSubmitting}
                  {...register("name", {
                    required: `${title} is required`,
                    minLength: {
                      value: 1,
                      message: "Must be at least 1 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9\s-]+$/,
                      message:
                        "Only letters, numbers, spaces and hyphens allowed",
                    },
                  })}
                />
                {errors?.name && (
                  <p className="text-red-400 text-sm mt-2 ml-4 self-start">
                    {errors?.name?.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gray-800 !rounded-full px-8 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-900"
                }`}
              >
                <p className="text-white">
                  {isSubmitting ? "Submitting..." : "Submit"}
                </p>
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="mt-4">
        {isPending && !subDetails && !isFetchError ? (
          [...Array(5)].map((_, i) => <SubDetailSkeleton key={i} />)
        ) : subDetails?.data?.length > 0 ? (
          subDetails.data.map((item) => (
            <div
              key={item.id || item._id}
              className="mb-4 p-5 bg-gray-800 rounded text-white mt-5 px-6 flex justify-between items-center"
            >
              <div>{item.name}</div>
              <div className="flex items-center  gap-5">
                <Edit className="text-blue-500 " size={19} />
                <Trash2 className="text-red-500" size={19} />
              </div>
            </div>
          ))
        ) : (
          <div className="text-white text-center py-8 ">
            
            <NotFound1 message={`No ${title.toLowerCase()}s available`} />
          </div>
        )}
      </section>
    </>
  );
}

export default InputSection;
