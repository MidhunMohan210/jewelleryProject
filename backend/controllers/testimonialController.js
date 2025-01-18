import TestimonialModel from "../models/testimonialModel.js";

export const createTestimonial = async (req, res) => {
  try {

    console.log('Body:', req.body); // Logs text fields
    console.log('Files:', req.files); // Logs uploaded files
  
    if (!req.files || !req.files.image) {
      return res.status(400).json({ error: 'Image file is required' });
    }
  
    const { name, position, comment, rating } = req.body;
    const image = req.files.image;
  
    console.log({ name, position, comment, rating });
    console.log('Uploaded Image:', image);
  
    res.json({ message: 'Data received successfully' });
    // console.log(req.body, 'Request Body12');

    // const { name, comment,position, rating, image } = req.body;

    // if (!name || !comment || !position || !rating || !image) {
    //   return res.status(400).json({ error: 'Missing required fields' });
    // }

    // const newTestimonial = new TestimonialModel({
    //   name,
    //   testimonial:comment,
    //   rating,
    //   // image,
    //   position
    // });

    // await newTestimonial.save();

    // // Respond with the created testimonial
    // res.status(201).json(newTestimonial);
  } catch (err) {
    console.error('Error creating testimonial:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
