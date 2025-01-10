import PhoneComponent from "@/components/sideComponents/phoneComponent";
import { Header } from "../components/layout/Header";
import Router from "../routes/Router";
import { Footer } from "@/components/layout/Footer";
import ScrollComponents from "@/components/sideComponents/ScrollComponents";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "@/components/loader/Loader";

function Layout() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader for 1 second before rendering the page
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [location]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex flex-col flex-grow gap-3 sm:gap-4 lg:gap-5  px-8 sm:px-10 lg:px-12">
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
