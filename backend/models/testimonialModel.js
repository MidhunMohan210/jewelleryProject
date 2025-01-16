import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  testimonial: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
  },
  image: {
    type: String,
  },
});

const TestimonialModel = mongoose.model("Testimonial", testimonialSchema);
export default TestimonialModel;
