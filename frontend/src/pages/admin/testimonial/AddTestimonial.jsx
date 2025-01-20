import TestimonialForm from "@/components/forms/TestimonialForm";
import axios from "axios";
import { useState,useEffect } from "react";
import { useMutation } from "@tanstack/react-query";


const AddTestimoniall = (data)=>{
  return axios.post('http://localhost:7008/admin/create-testimonial',data,{
   
  })
}
const AddTestimonial = () => {

  const {mutate} = useMutation({
    mutationFn: AddTestimoniall,
  })

  const onSubmitCreate = (data) => {
    console.log('Submitting data from parent :', data);
  
  
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('position', data.position);
    formData.append('comment', data.comment);
    formData.append('rating', data.rating);
    formData.append('image', data.compressedImage);
   
  
    mutate(formData);
  };
  return (
    <>
    {/* <div>
      
    </div> */}
      <TestimonialForm onSubmitCreate={onSubmitCreate} mode={'create'}  />

    </>
  );
};

export default AddTestimonial;
