import express from "express";
import { getProducts } from "../controllers/productController.js";

import {
  createSubDetail,
  deleteSubdetials,
  getSubDetails,
  updateSubdetails,
} from "../controllers/subDetailsController.js";

import {
  createTestimonial,
  deleteTestimonial,
  editTestimonials,
  getTestimonials,
} from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/products", getProducts);

// Testimonial routes
router.post("/create-testimonial", createTestimonial);
router.get("/list-testimonials", getTestimonials);
router.put("/edit-testimonials/:id", editTestimonials);
router.delete("/delete-testimonials/:id", deleteTestimonial);

///sub details route
router.post("/create-subdetails", createSubDetail);
router.delete("/delete-subdetails/:id", deleteSubdetials);
router.put("/update-subdetails/:id", updateSubdetails);

router.get("/get-subdetails", getSubDetails);

export default router;
