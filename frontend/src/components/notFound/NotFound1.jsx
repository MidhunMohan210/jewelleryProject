/* eslint-disable react/prop-types */
import { Bird } from "lucide-react";

function NotFound1({ message }) {
  
  return (
    <div className={`flex flex-col items-center justify-center  overflow-hidden text-gray-500`}>
      <Bird className="w-10 h-10 " />
      <h1 className="text-sm font-semibold tracking-wide mt-2">{message}</h1>
    </div>
  );
}

export default NotFound1;