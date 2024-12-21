import { Header } from "../components/layout/Header";
import Router from "../routes/Router";
import { Footer } from "@/components/layout/Footer";

function Layout() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Router />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
