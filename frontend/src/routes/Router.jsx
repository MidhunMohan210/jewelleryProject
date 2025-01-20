import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "@/pages/about/About";
import Products from "@/pages/Products/Products";
import ProductDetailPage from "@/pages/Products/ProductDetailPage";
import Contact from "@/pages/contact-us/Contact";
import AdminLogin from "@/pages/login/AdminLogin";
import AdminDashboard from "@/pages/admin/dashboard/AdminDashboard";
import AddTestimonial from "@/pages/admin/testimonial/AddTestimonial";
<<<<<<< HEAD
import Category from "@/pages/admin/category/Category";
import Material from "@/pages/admin/material/Material";
import Brand from "@/pages/admin/brand/Brand";
import Size from "@/pages/admin/size/Size";
=======
import EditTestimonial from "@/pages/admin/testimonial/editTestimonial";
import TestimonialsList from "@/pages/admin/testimonial/TestimonialList";
>>>>>>> origin

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
<<<<<<< HEAD
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/material" element={<Material />} />
        <Route path="/admin/brand" element={<Brand/>}  />
        <Route path="/admin/size" element={<Size/>}  />
=======
        <Route path="/admin/list-Testimonial" element={<TestimonialsList />} />

        <Route path="/admin/editTestimonial/:id" element={<EditTestimonial />} />

>>>>>>> origin
      </Routes>
    </>
  );
}

export default Router;
