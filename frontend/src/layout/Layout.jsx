import PhoneComponent from "@/components/sideComponents/phoneComponent";
import { Header } from "../components/layout/Header";
import Router from "../routes/Router";
import { Footer } from "@/components/layout/Footer";
import ScrollComponents from "@/components/sideComponents/ScrollComponents";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "@/components/loader/navigationLoader/Loader";
import AdminSidebar from "@/components/sidebar/AdminSidebar";
import AdminHeader from "@/components/layout/AdminHeader";

function Layout() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const isAdminPath = location.pathname.includes("admin");
  const isLoginPath = location.pathname.includes("login");

  const getAdminTitle = (pathname) => {
    // Base admin routes
    const adminTitles = {
      "/admin/dashboard": "Dashboard",
      "/admin/inventory/category": "Category",
      "/admin/inventory/material": "Material",
      "/admin/inventory/brand": "Brand",
      "/admin/inventory/size": "Size",
      "/admin/list-Testimonial": "Testimonial List",
      "/admin/addTestimonial": "Add Testimonial",
      "/admin/editTestimonial": "Edit Testimonial",
      "/admin/product": "Products",
    };

    // Check if it's a subcategory path
    if (pathname.startsWith("/admin/inventory/subcategory")) {
      return "Subcategory";
    }

    // Check for exact matches first
    if (adminTitles[pathname]) {
      return adminTitles[pathname];
    }


    // If no match found, return default
    return "Admin Panel";
  };


  const isInventoryRoute = location.pathname.includes("/admin/inventory");

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  // Get the current admin title
  const adminTitle = getAdminTitle(location.pathname);

  // Login page - no layout
  if (isLoginPath) {
    return isLoading ? <Loader /> : <Router />;
  }

  // Admin layout with sidebar
  if (isAdminPath) {
    return (
      <div className="h-screen overflow-hidden">
        <div className="flex h-full">
          <AdminSidebar className="h-full" />
          <div className="flex-1 flex flex-col h-full">
            {/* Admin Header with fixed height */}
            <AdminHeader className="h-16" title={adminTitle} />
            {/* Remaining content takes up the rest of the height */}
            <div className={`${!isInventoryRoute && "p-3"} flex-1 overflow-y-auto scrollbar-none bg-[#181c29]`}>
              <Router />
            </div>
          </div>
        </div>
      </div>
    );
  }
  

  // Regular layout
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex flex-col flex-grow gap-3 sm:gap-4 lg:gap-5 px-8 sm:px-10 lg:px-12">
            <Router />
            <PhoneComponent />
            <ScrollComponents />
          </main>
          <Footer className="mt-auto bottom-0" />
        </div>
      )}
    </>
  );
}

export default Layout;