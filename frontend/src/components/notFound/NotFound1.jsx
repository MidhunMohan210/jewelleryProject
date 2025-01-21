// import notFound from "../../assets/notFound/space.png";

import { Bird } from "lucide-react";

// eslint-disable-next-line react/prop-types
function NotFound1({ message }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-28 text-gray-500   ">
      <Bird className="w-12 h-12 "/>
      <h1 className="text-sm font-bold ">{message}</h1>
    </div>
  );
}

export default NotFound1;
