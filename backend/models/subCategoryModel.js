import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categoryId: { type: mongoose.Types.ObjectId, ref: "Category" },
});

const SubCategoryModel = mongoose.model("SubCategory", subCategorySchema);
export default SubCategoryModel;
