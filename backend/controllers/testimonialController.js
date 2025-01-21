/* eslint-disable no-undef */
import TestimonialModel from "../models/testimonialModel.js";
import { uploadImageToCloudinary,getCloudinaryPublicId } from "../config/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv'

dotenv.config()

// Configure Cloudinary (use environment variables for security)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dayokqiul",
  api_key: process.env.CLOUDINARY_API_KEY || "998382992982661",
  api_secret: process.env.CLOUDINARY_API_SECRET || "B8kmPp48DvZAZku9BI74uI9A0hE",
});



/**
 * Creates a new testimonial.
 * 
 * This function handles the incoming request to create a testimonial by:
 * 1. Extracting the required fields (name, comment, position, rating) from the request body.
 * 2. Validating that all required fields are provided.
 * 3. Uploading the testimonial image to Cloudinary.
 * 4. Saving the testimonial data, including the uploaded image URL, to the database.
 * 5. Sending a success response with the created testimonial data or an error response if any issues occur.
 * 
 * @param {Object} req - The request object containing the testimonial data.
 * @param {Object} res - The response object used to send back the desired HTTP response.
 */

/**
 * Creates a new testimonial.
 * 
 * This function handles the incoming request to create a testimonial by:
 * 1. Extracting the required fields (name, comment, position, rating) from the request body.
 * 2. Validating that all required fields are provided.
 * 3. Uploading the testimonial image to Cloudinary.
 * 4. Saving the testimonial data, including the uploaded image URL, to the database.
 * 5. Sending a success response with the created testimonial data or an error response if any issues occur.
 * 
 * @param {Object} req - The request object containing the testimonial data.
 * @param {Object} res - The response object used to send back the desired HTTP response.
 */

export const createTestimonial = async (req, res) => {
  try {
    const { name, comment, position, rating } = req.body;
    console.log(req.files)
    const image = req.files?.image;

    if (!name || !comment || !position || !rating || !image) {
      return res.status(400).json({ message: "Missing required fields" });
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
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getTestimonials = async (req, res) => {
  try { 

    const testimonials = await TestimonialModel.find().sort({ createdAt: -1 });
    if(testimonials){
      res.status(200).json(testimonials)
    }else{
      res.status(501).json({message:'Something went wrong'})
    }

  }catch(err){
    console.log(err)

    res.status(500).json({message:'Internal sever error'})
  }
}


export const editTestimonials = async (req, res) => {
  try {
    const testimonialId = req.params.id;

    const { name, comment, position, rating } = req.body;
    if (!name || !comment || !position || !rating) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const testimonial = await TestimonialModel.findById(testimonialId);
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    // Fields to update
    let updatedFields = { name, testimonial: comment, position, rating };

    // Handle image update
    if (req.files?.image) {
      const image = req.files.image;
      const existingImage = testimonial?.image;

      // Delete existing image from Cloudinary
      if (existingImage) {
        console.log("Existing Image URL:", existingImage); // Debug log
      
        
      
        const publicId = getCloudinaryPublicId(existingImage);
        console.log("Extracted Public ID for deletion:", publicId);
        
        if (publicId) {
          const result = await cloudinary.uploader.destroy(publicId);
          if (result.result === "ok") {
            console.log("Image deleted successfully:", result);
          } else {
            console.log("Image deletion failed:", result);
          }
        } else {
          console.log("Failed to extract Public ID. Image deletion skipped.");
        }
        
      }
      
      // Upload new image to Cloudinary
      const imageUploadResult = await uploadImageToCloudinary(image.tempFilePath, {
        folder: "testimonialImages",
      });

      updatedFields.image = imageUploadResult?.secure_url;
    }

    // Update the testimonial in the database
    const updatedTestimonial = await TestimonialModel.findByIdAndUpdate(
      { _id: testimonialId },
      { $set: updatedFields },
      { new: true } // Return the updated document
    );

    if (updatedTestimonial) {
      return res.status(200).json({
        message: "Testimonial updated successfully",
        testimonial: updatedTestimonial,
      });
    } else {
      return res.status(500).json({ message: "Failed to update testimonial" });
    }
  } catch (err) {
    console.error("Error updating testimonial:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTestimonial = async (req, res) => { 
  try{

    const {id } =req.params
    if (!id) {
      return res.status(400).json({ message: "Testimonial ID is required" });
    }
    const testimonial = await TestimonialModel.findByIdAndDelete(id);
    if(testimonial){
     return res.status(204).json({message:'Testimonial Deleted succesfully'})
    }else{
     return  res.status(503).json({message:`Couldn't delete testimonial`})
    }
  }catch(err){
    console.log(err)
    return res.status(500).json({ message: "Internal server error" });

  }
 }