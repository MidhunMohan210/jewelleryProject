import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { useState } from "react";

function NavbarPhone() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", title: "HOME", isActive: true },
    { to: "/products", title: "PRODUCTS", isActive: true },
    { to: "/about", title: "ABOUT", isActive: true },
    // Uncomment if needed
    // { to: "/gallery", title: "GALLERY", isActive: false },
    { to: "/contact", title: "CONTACT", isActive: true },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <SheetTrigger className="flex items-center justify-center gap-2 jost">
        <div className="">
          <IoReorderThreeOutline
            size={30}
            className={` ${
              open && " transition-all transform  rotate-90 duration-500 ease-out "
            }   mt-[-2px]   `}
          />
        </div>
      </SheetTrigger>

      {/* Sidebar Content */}
      <SheetContent
        side="left"
        className="w-[320px] p-0 max-h-screen overflow-y-scroll scrollbar-none pb-10"
      >
        <SheetHeader>
          {/* Navbar Header */}
          <SheetTitle className="bg-[#a0a5a9] text-white p-4 sticky top-0">
            <div className="flex items-center gap-3 text-2xl sarina-regular px-3">
              Cliq
            </div>
          </SheetTitle>
        </SheetHeader>

        {/* Navigation Links */}
        <div className="p-8">
          <ul className="flex flex-col gap-5">
            {navItems
              .filter((item) => item.isActive)
              .map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="text-sm border-b pb-5 text-gray-700 !font-bold flex items-center justify-between"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                    <RiArrowRightSLine size={20} />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <p className="absolute bottom-0 left-0 right-0 text-xs leading-6 text-center text-gray-400 bg-gray-100 p-7">
          © 2025 Midhun & Albert , Inc. All rights reserved.
        </p>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarPhone;
