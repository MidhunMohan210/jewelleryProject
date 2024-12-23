import PhoneComponent from "@/components/sideComponents/phoneComponent";
import { Header } from "../components/layout/Header";
import Router from "../routes/Router";
import { Footer } from "@/components/layout/Footer";
import ScrollComponents from "@/components/sideComponents/ScrollComponents";

function Layout() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Router />
        <PhoneComponent/>
        <ScrollComponents/>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
