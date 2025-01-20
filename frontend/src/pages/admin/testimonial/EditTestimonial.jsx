import TestimonialForm from "@/components/forms/TestimonialForm";
import axios from "axios";
import { useState,useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useParams,useLocation } from "react-router-dom";


const editTestimoniall = (data,id)=>{
  return axios.put(`http://localhost:7008/admin/edit-testimonials/${id}`,data,{
   
  })
}
const EditTestimonial = () => {
    const location = useLocation();
    const productDetail = location?.state?.testimonial;

    console.log(productDetail,'form edit')
    const {id} = useParams();

  const {mutate} = useMutation({
    mutationFn: ({ data, id }) => editTestimoniall(data, id),
  })

  const onSubmitEdit = (data) => {
    console.log('Submitting data from edit parent :', data);
  
  
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('position', data.position);
    formData.append('comment', data.comment);
    formData.append('rating', data.rating);
    formData.append('image', data.compressedImage);
   
  console.log(formData,'dataaa')
    mutate({ data: formData, id }, {
        onSuccess: () => {
          alert("Testimonial updated successfully!");
        },
        onError: (error) => {
          console.error("Error updating testimonial:", error);
          alert("Failed to update testimonial.");
        },
      });
  
  };
  return (
    <>
    {/* <div>
      
    </div> */}
      <TestimonialForm onSubmitEdit={onSubmitEdit} mode={'edit'} productDetail={productDetail}  />

    </>
  );
};

export default EditTestimonial;


// export default editTestimonial