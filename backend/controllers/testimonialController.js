import TestimonialModel from "../models/testimonialModel.js";
import { uploadImageToCloudinary } from "../config/cloudinary.js";

export const createTestimonial = async (req, res) => {
  try {
    const { name, comment, position, rating } = req.body;
    console.log(req.files)
    const image = req.files?.image;

    if (!name || !comment || !position || !rating || !image) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    console.log(image.data,'imageeee')

 
    const imageUploadResult = await uploadImageToCloudinary(image.tempFilePath, {
      folder: "testimonialImages",
    });

    console.log(imageUploadResult, "Uploaded Image URL");

    // Save testimonial to the database
    const newTestimonial = new TestimonialModel({
      name,
      testimonial: comment,
      rating,
      image: imageUploadResult.secure_url, 
      position,
    });

    await newTestimonial.save();

    res.status(201).json({
      message: "Testimonial created successfully",
      testimonial: newTestimonial,
    });
  } catch (err) {
    console.error("Error creating testimonial:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
