import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "@/pages/about/About";
import Products from "@/pages/Products/Products";
import ProductDetailPage from "@/pages/Products/ProductDetailPage";
import Contact from "@/pages/contact-us/Contact";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetail/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Router;
