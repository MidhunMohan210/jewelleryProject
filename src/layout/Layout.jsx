import PhoneComponent from "@/components/sideComponents/phoneComponent";
import { Header } from "../components/layout/Header";
import Router from "../routes/Router";
import { Footer } from "@/components/layout/Footer";
import ScrollComponents from "@/components/sideComponents/ScrollComponents";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "@/components/loader/Loader";
import AdminSidebar from "@/components/sidebar/AdminSidebar";
import AdminHeader from "@/components/layout/AdminHeader";

function Layout() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const isAdminPath = location.pathname.includes("admin");
  const isLoginPath = location.pathname.includes("login");

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  // Login page - no layout
  if (isLoginPath) {
    return isLoading ? <Loader /> : <Router />;
  }

  // Admin layout with sidebar
  if (isAdminPath) {
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex h-screen">
            <div className="flex ">
              <AdminSidebar />
            </div>
            <div className="flex-1 flex flex-col">
              <AdminHeader />
              <div className=" flex-1 overflow-y-auto scrollbar-none p-3 bg-[#181c29]">
                <Router />
              </div>
            </div>
          </div>
        )}
      </>
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
