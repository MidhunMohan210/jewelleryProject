/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import {
  // User,
  Menu,
  Plus,
} from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { CommandSearch } from "../command/CommandSearch";
import { useSidebar } from "../../context/SidebarContext";
import CustomBarLoader from "../loader/CustomBarLoader/CustomBarLoader";
import { useLoader } from "@/context/LoaderContext.";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const AdminHeader = ({ title }) => {
  const { toggleSidebar, toggleMobileSidebar } = useSidebar();
  const { isLoading } = useLoader();
  const navigate = useNavigate();

  // Define pages that should show the add button and their corresponding navigation routes
  const addButtonConfig = {
    "Testimonial List": "/admin/addTestimonial",
    // Add more pages as needed, for example:
    // "Category": "/admin/add-category",
    // "Brand": "/admin/add-brand",
  };
  const showAddButton = addButtonConfig.hasOwnProperty(title);
  const addButtonRoute = addButtonConfig[title];

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      toggleMobileSidebar();
    } else {
      toggleSidebar();
    }
  };

  const handleAddClick = () => {
    navigate(addButtonRoute);
  };

  return (
    <header className="w-full bg-[#181c29] border-b border-gray-800 shadow-sm  ">
      <div className="px-6 py-4 pr-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleMenuClick}
            className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-400 hover:text-gray-100" />
          </button>
          <h1 className="text-lg font-bold text-gray-400">{title}</h1>
        </div>

        {showAddButton && (
          <Plus
            onClick={handleAddClick}
            className="w-6 h-6 text-gray-400 hover:text-gray-100 cursor-pointer "
          />
        )}
      </div>
      {isLoading && <CustomBarLoader />}
    </header>
  );
};

export default AdminHeader;
