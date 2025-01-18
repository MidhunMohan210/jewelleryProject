import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "@/pages/about/About";
import Products from "@/pages/Products/Products";
import ProductDetailPage from "@/pages/Products/ProductDetailPage";
import Contact from "@/pages/contact-us/Contact";
import AdminLogin from "@/pages/login/AdminLogin";
import AdminDashboard from "@/pages/admin/dashboard/AdminDashboard";
import AddTestimonial from "@/pages/admin/testimonial/AddTestimonial";
import Category from "@/pages/admin/category/Category";
import Material from "@/pages/admin/material/Material";
import Brand from "@/pages/admin/brand/Brand";
import Size from "@/pages/admin/size/Size";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetail/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<Contact />} />

        {/* admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/addTestimonial" element={<AddTestimonial />} />
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/material" element={<Material />} />
        <Route path="/admin/brand" element={<Brand/>}  />
        <Route path="/admin/size" element={<Size/>}  />
      </Routes>
    </>
  );
}

export default Router;
