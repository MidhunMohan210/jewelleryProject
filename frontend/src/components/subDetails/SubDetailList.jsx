/* eslint-disable react/prop-types */
import apiClient from "@/config/api";
import { useLoader } from "@/context/LoaderContext.";
import { useQuery } from "@tanstack/react-query";

function SubDetailList({ formType }) {

  const {startLoading,stopLoading}=useLoader()
  const getSubDetails = async (payload) => {
    console.log(payload);
    const { data } = await apiClient.get("/admin/get-subdetails", {
      params: { type: formType?.toLowerCase() },
    }); // Payload sent in request body
    return data;
  };

  const { data: subDetails } = useQuery({
    queryKey: ["subDetails"],
    queryFn: getSubDetails,

   



  });



  return (
    <div>
      {[...Array(20)].map((_, i) => (
        <div key={i} className="mb-4 p-4 bg-gray-800 rounded text-white">
          Scrollable content {i + 1}
        </div>
      ))}
    </div>
  );
}

export default SubDetailList;
