import TestimonialForm from "@/components/forms/TestimonialForm";
import apiClient from "@/config/api";
import { useNavigate } from "react-router-dom";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { useParams,useLocation } from "react-router-dom";
import { useLoader } from "@/context/LoaderContext.";
import { useToast } from "@/hooks/use-toast";


const editTestimoniall = (data,id)=>{
  return apiClient.put(`/admin/edit-testimonials/${id}`,data,{
   
  })
}
const EditTestimonial = () => {
  const { startLoading, stopLoading } = useLoader();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const navigate = useNavigate('')
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