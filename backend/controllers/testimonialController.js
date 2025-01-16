import TestimonialModel from "../models/testimonialModel.js";

export const createTestimonial = async (req, res) => {
  try {
    console.log(req.body, 'Request Body');

    const { name, comment,position, rating, image } = req.body.formData;

    if (!name || !comment || !position || !rating || !image) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newTestimonial = new TestimonialModel({
      name,
      testimonial:comment,
      rating,
      image,
      position
    });

    await newTestimonial.save();

    // Respond with the created testimonial
    res.status(201).json(newTestimonial);
  } catch (err) {
    console.error('Error creating testimonial:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
