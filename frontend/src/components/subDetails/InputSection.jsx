/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useLoader } from "@/context/LoaderContext.";
import { Button } from "../ui/Button";
import SubDetailSkeleton from "../skeleton/SubDetailSkeleton";
import apiClient from "@/config/api";
import { Edit, SquareSlash, Trash2, X } from "lucide-react";
import NotFound1 from "../notFound/NotFound1";
import Alert from "../Alert";
import { memo, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

//// apis

const api = {
  getSubDetails: async (formType, catId) => {
    const { data } = await apiClient.get("/admin/get-subdetails", {
      params: { type: formType.toLowerCase(), categoryId: catId || null },
    });
    return data;
  },

  deleteSubDetails: async ({ id, formType }) => {
    return await apiClient.delete(`/admin/delete-subdetails/${id}`, {
      params: { type: formType.toLowerCase() },
    });
  },

  postSubDetails: async ({ payload, formType }) => {
    const { data } = await apiClient.post("/admin/create-subdetails", payload, {
      params: { type: formType },
    });
    return data;
  },

  updateSubDetails: async ({ id, payload, formType }) => {
    const { data } = await apiClient.put(
      `/admin/update-subdetails/${id}`,
      payload,
      {
        params: { type: formType },
      }
    );
    return data;
  },
};

const ItemRow = memo(
  ({ item, onDelete, onEdit, editItem, formType, navigate }) => (
    <div className="mb-4 p-5 bg-gray-800 rounded text-white mt-5 px-6 flex justify-between items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {" "}
            {item.name && item?.name?.length > 20
              ? `${item?.name?.substring(0, 20)}...`
              : item.name}
            {formType === "category" && (
              <span className="ml-3 text-gray-400">
                / <span className="">({item?.subcategoryCount})</span>
              </span>
            )}
          </TooltipTrigger>
          <TooltipContent>
            <p>{item.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="flex items-center gap-5">
        {formType === "category" && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <SquareSlash
                  onClick={() => {
                    navigate(`/admin/subcategory/${item._id}/${item.name}`);
                  }}
                  size={20}
                  className=""
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Sub Categories</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        <Edit
          className={`text-blue-500 cursor-pointer ${
            editItem?._id === item._id ? "opacity-50 pointer-events-none" : ""
          }`}
          size={20}
          onClick={() => onEdit(item)}
        />
        <div
          className={
            editItem?._id === item._id ? "opacity-50 pointer-events-none" : ""
          }
        >
          <Alert
            triggerText={
              <Trash2
                className=" text-red-400 group-hover:text-red-300"
                size={20}
              />
            }
            title="Delete Item"
            description={`Are you sure you want to delete ${item?.name}? This action cannot be undone.`}
            onConfirm={() => onDelete(item._id)}
            disabled={editItem?._id === item._id}
          />
        </div>
      </div>
    </div>
  )
);

ItemRow.displayName = "ItemRow";

function InputSection({ title }) {
  const { startLoading, stopLoading } = useLoader();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const formType = title?.toLowerCase() || "";
  const [editItem, setEditItem] = useState(null);
  const navigate = useNavigate();
  const { catId = "", catName = "" } = useParams();

  console.log(catId, catName);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const {
    isPending,
    isError: isFetchError,
    data: subDetails,
    error: fetchError,
    refetch,
  } = useQuery({
    queryKey: ["subDetails", formType, catId || null],
    queryFn: () => api.getSubDetails(formType, catId),
    retry: 1,
    enabled: Boolean(formType),
  });

  const { mutate: postMutation } = useMutation({
    mutationFn: (data) => api.postSubDetails({ payload: data, formType }),
    onMutate: () => startLoading(),
    onSuccess: (newData) => {
      stopLoading();
      reset();
      queryClient.setQueryData(
        ["subDetails", formType, catId || null],
        (old) => ({
          ...old,
          data: [...(old?.data || []), newData.data],
        })
      );

      /// to invalidate the cache of category only to show the latest count of subcategory
      if (formType === "subcategory") {
        queryClient.invalidateQueries(["subDetails", "category", null]);
      }
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

  const { mutate: updateMutation } = useMutation({
    mutationFn: ({ id, data }) =>
      api.updateSubDetails({
        id,
        payload: data,
        formType,
      }),
    onMutate: async ({ id, data }) => {
      startLoading();
      await queryClient.cancelQueries(["subDetails", formType, catId || null]);
      const previousData = queryClient.getQueryData([
        "subDetails",
        formType,
        catId || null,
      ]);

      queryClient.setQueryData(
        ["subDetails", formType, catId || null],
        (old) => ({
          ...old,
          data: old.data.map((item) =>
            item._id === id ? { ...item, ...data } : item
          ),
        })
      );

      return { previousData };
    },
    onSuccess: () => {
      stopLoading();
      reset();
      setEditItem(null);
      toast({
        title: "Updated!",
        description: `${title} updated successfully`,
        variant: "success",
      });
    },
    onError: (error, _, context) => {
      stopLoading();
      queryClient.setQueryData(
        ["subDetails", formType, catId || null],
        context.previousData
      );
      toast({
        title: "Error!",
        description: error.message,
        variant: "destructive",
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries(["subDetails", formType, catId || null]);
    },
  });

  const { mutate: deleteMutation, isPending: isDeletePending } = useMutation({
    mutationFn: (id) => api.deleteSubDetails({ id, formType }),
    onMutate: async (id) => {
      startLoading();
      await queryClient.cancelQueries(["subDetails", formType, catId || null]);
      const previousData = queryClient.getQueryData([
        "subDetails",
        formType,
        catId || null,
      ]);

      queryClient.setQueryData(
        ["subDetails", formType, catId || null],
        (old) => ({
          ...old,
          data: old?.data?.filter((item) => item._id !== id) || [],
        })
      );

      return { previousData };
    },
    onError: (error, _, context) => {
      stopLoading();
      queryClient.setQueryData(
        ["subDetails", formType, catId || null],
        context.previousData
      );
      toast({
        title: "Error!",
        description: error.message,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      stopLoading();
      toast({
        title: "Deleted!",
        description: "Item deleted successfully.",
        variant: "success",
      });
    },
    onSettled: () => {
      stopLoading();
      queryClient.invalidateQueries(["subDetails", formType, catId || null]);
    },
  });

  const handleEdit = (item) => {
    setEditItem(item);
    setValue("name", item.name);
  };

  const cancelEdit = () => {
    setEditItem(null);
    reset();
  };

  const onSubmit = (data) => {
    if (isSubmitting) return;

    if (editItem) {
      updateMutation({ id: editItem._id, data });
    } else {
      if (formType === "subcategory" && catId && catName) {
        data.categoryId = catId;
      }
      console.log("data", data);

      postMutation(data);
    }
  };

  if (isFetchError) {
    return (
      <div className="text-red-500 p-4 text-center">
        <p>Error: {fetchError?.message}</p>
        <Button
          onClick={refetch}
          className="mt-2 bg-gray-800 hover:bg-gray-900"
        >
          Retry
        </Button>
      </div>
    );
  }

  const renderContent = () => {
    if (isPending || isDeletePending) {
      return [...Array(5)].map((_, i) => <SubDetailSkeleton key={i} />);
    }

    if (!subDetails?.data?.length) {
      return (
        <div className="text-white text-center py-8 h-full flex items-center justify-center">
          <NotFound1 message={`No ${title.toLowerCase()}s available`} />
        </div>
      );
    }

    return subDetails.data.map((item) => (
      <ItemRow
        key={item._id}
        item={item}
        onDelete={deleteMutation}
        onEdit={handleEdit}
        editItem={editItem}
        formType={formType}
        navigate={navigate}
      />
    ));
  };

  return (
    <>
      <section className="sticky top-0 z-10 mt-[-0.75rem]">
        <div className="h-[250px] bg-[#513cac] flex items-center justify-center border-b-2 border-gray-400">
          <div className="p-2 w-full flex flex-col items-center justify-center gap-5">
            <p className="font-bold text-md sm:text-xl text-gray-200">
              {editItem
                ? `EDIT ${title?.toUpperCase()}`
                : `ADD YOUR DESIRED ${title?.toUpperCase()} ${
                    catName && catName.length
                      ? `IN ${
                          catName.length > 10
                            ? `${catName.substring(0, 10).toUpperCase()}...`
                            : catName.toUpperCase()
                        }`
                      : ""
                  }`}
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col items-center gap-5"
            >
              <div className="w-3/4 sm:w-1/2 relative flex flex-col items-center">
                <div className="w-full relative">
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
                      validate: (value) => value.trim() !== "",
                      minLength: {
                        value: 1,
                        message: "Must be at least 1 character",
                      },
                      maxLength: {
                        value: 30,
                        message: "Must be less than 30 characters",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9\s-]+$/,
                        message:
                          "Only letters, numbers, spaces and hyphens allowed",
                      },
                    })}
                  />
                  {editItem && (
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                    </button>
                  )}
                </div>
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
                {isSubmitting
                  ? "Submitting..."
                  : editItem
                  ? "Update"
                  : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="mt-4">{renderContent()}</section>
    </>
  );
}

export default InputSection;
