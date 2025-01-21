/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useCallback, useMemo } from "react";
import { Edit, Trash2, Star, StarHalf } from "lucide-react";
import apiClient from "@/config/api";
import { Link, useNavigate } from "react-router-dom";
import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import Alert from "@/components/Alert";
import { useLoader } from "@/context/LoaderContext.";
import { useToast } from "@/hooks/use-toast";


const fetchTestimonials = async () => {
  const response = await apiClient.get(
    "/admin/list-testimonials"
  );
  return response.data;
};

const deleteTestimonial = async(id)=>{
  console.log(id,'idddd')
  const response = await apiClient.delete(`/admin/delete-testimonials/${id}`);

  return response
}

const RatingStars = React.memo(({ rating }) => {
  const stars = useMemo(() => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        result.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        result.push(
          <StarHalf
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        );
      } else {
        result.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return result;
  }, [rating]);

  return <div className="flex gap-1">{stars}</div>;
});

const TestimonialsList = () => {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoader();
  const queryClient = useQueryClient();
  const { toast } = useToast();
 
  // Fetch testimonials using react-query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });

   const {mutate} = useMutation({
      mutationFn: deleteTestimonial,
      onMutate: () => {
        startLoading();
      },
      onSuccess: () => {
        stopLoading();
        toast({
          title: "Success !",
          description: "Testimonial Updated succesfully",
        });
  queryClient.invalidateQueries(["testimonials"]);

        navigate('/admin/list-Testimonial')
  
      },
      onError: (error) => {
        stopLoading();
        toast({
          title: "Error !",
          description: error?.response?.data?.message,
        });
      }
    })
  

  const handleEdit = useCallback(
    (testimonial) => {
      console.log(testimonial, "tesit");
      navigate(`/admin/editTestimonial/${testimonial._id}`, {
        state: { testimonial },
      });
      // queryClient.invalidateQueries(["testimonials"]);
    },
    [navigate]
  );

  const handleDelete = useCallback((id) => {
    console.log("Delete testimonial:", id);
    mutate(id)
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-400">
          Loading testimonials...
        </p>
      </div>
    );
  }

  
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-red-500">
          Error: {error.message}
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      <div className="w-full flex justify-between p-9 items-center">
        <h1 className="text-2xl text-gray-400 font-semibold">Testimonials</h1>
        <Link to="/admin/addTestimonial">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-lg">
            Add Testimonial
          </button>
        </Link>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1  gap-6 sm:p-9 p-5">
        {data?.map((testimonial) => (
          <div
            key={testimonial._id}
            className="bg-gray-900 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6 flex flex-col h-full">
              {/* Header Section */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-700"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/64/64";
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-100 truncate">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {testimonial.position}
                  </p>
                  <RatingStars rating={testimonial.rating} />
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="flex-grow">
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {testimonial.testimonial}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end items-center space-x-3 mt-6 pt-4 border-t border-gray-700">
                <button
                  onClick={() => handleEdit(testimonial)}
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200 group"
                  aria-label={`Edit ${testimonial.name}`}
                >
                  <Edit className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </button>

                <button
                  // onClick={() => handleDelete(testimonial._id)}
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200 group"
                  aria-label={`Delete ${testimonial.name}`}
                >
                   <Alert
            triggerText= {<Trash2 className="w-5 h-5 text-red-400 group-hover:text-red-300" />}
            title="Delete Item"
            description={`Are you sure you want to delete ${testimonial.name}? This action cannot be undone.`}
            onConfirm={() => handleDelete(testimonial._id)}
          />
       
                 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestimonialsList;
