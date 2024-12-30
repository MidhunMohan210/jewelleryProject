import PhoneComponent from "@/components/sideComponents/phoneComponent";
import { Header } from "../components/layout/Header";
import Router from "../routes/Router";
import { Footer } from "@/components/layout/Footer";
import ScrollComponents from "@/components/sideComponents/ScrollComponents";

function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Router />
          <PhoneComponent />
          <ScrollComponents />
        </main>
        <Footer className="mt-auto bottom-0" />
      </div>
    </>
  );
}

export default Layout;
