import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const MaterialModel = mongoose.model("Material", materialSchema);
export default MaterialModel;
