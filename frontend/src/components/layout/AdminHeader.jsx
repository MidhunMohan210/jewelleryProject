import {
  // User,
  Menu,
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

const AdminHeader = () => {
  const { toggleSidebar, toggleMobileSidebar } = useSidebar();

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      toggleMobileSidebar();
    } else {
      toggleSidebar();
    }
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
          <h1 className="text-lg font-bold text-gray-400">Admin Dashboard</h1>
        </div>

        {/* <div className="flex items-center space-x-4">
          <CommandSearch />
          <div className="flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <User className="w-5 h-5 text-gray-300 hover:text-gray-100 transition-colors" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-6 mr-2 bg-gray-900 border border-gray-800">
                <DropdownMenuLabel className="text-gray-200">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="text-gray-300 hover:text-gray-100 focus:bg-gray-800 focus:text-gray-100 cursor-pointer">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div> */}
      </div>
      {/* <CustomBarLoader /> */}
    </header>
  );
};

export default AdminHeader;
