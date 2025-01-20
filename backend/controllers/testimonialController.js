import TestimonialModel from "../models/testimonialModel.js";
import { uploadImageToCloudinary } from "../config/cloudinary.js";

export const  createTestimonial = async (req, res) => {
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


export const getTestimonials = async (req, res) => {
  try { 

    const testimonials = await TestimonialModel.find().sort({ createdAt: -1 });
    if(testimonials){
      res.status(200).json(testimonials)
    }else{
      res.status(501).json({error:'Something went wrong'})
    }

  }catch(err){
    console.log(err)

    res.status(500).json({error:'Internal sever error'})
  }
}


export const editTestimonials = async (req, res) => {
  try {
    const testimonialId = req.params.id;

    const { name, comment, position, rating } = req.body;
    if (!name || !comment || !position || !rating) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const testimonial = await TestimonialModel.findById(testimonialId);
    if (!testimonial) {
      return res.status(404).json({ error: "Testimonial not found" });
    }

    let updatedFields = { name, testimonial: comment, position, rating };
    if (req.files?.image) {
      const image = req.files.image;

      const imageUploadResult = await uploadImageToCloudinary(image.tempFilePath, {
        folder: "testimonialImages",
      });

      updatedFields.image = imageUploadResult?.secure_url;
    }

    const updatedTestimonial = await TestimonialModel.findByIdAndUpdate(
      { _id: testimonialId },
      { $set: updatedFields },
      { new: true } 
    );

    if (updatedTestimonial) {
      return res.status(204).json({ message: "Testimonial updated successfully", testimonial: updatedTestimonial });
    } else {
      return res.status(500).json({ error: "Failed to update testimonial" });
    }
  } catch (err) {
    console.error("Error updating testimonial:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTestimonial = async (req, res) => { 
  try{

    const {id } =req.body
    if (!id) {
      return res.status(400).json({ error: "Testimonial ID is required" });
    }
    const testimonial = await TestimonialModel.findByIdAndDelete(id);
    if(testimonial){
     return res.status(200).json({message:'Testimonial Deleted succesfully'})
    }else{
     return  res.status(503).json({error:`Couldn't delete testimonial`})
    }
  }catch(err){
    console.log(err)
    return res.status(500).json({ error: "Internal server error" });

  }
 }