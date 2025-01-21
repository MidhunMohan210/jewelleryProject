/* eslint-disable no-unused-vars */
import BrandModel from "../models/brandModel.js";
import CategoryModel from "../models/categoryMode.js";
import SubCategoryModel from "../models/subCategoryModel.js";
import MaterialModel from "../models/materialModel.js";
import SizeModel from "../models/sizeModel.js";

/**
 * @desc Add a new sub-detail (brand, category, subcategory, material, size)
 * @route POST /api/addSubDetail/:type
 * @access Public
 * @param {string} type - The type of sub-detail to add (e.g., "brand", "category", "subcategory", "material", "size")
 * @body {object} data - The data for the new sub-detail, including required fields such as `name`
 * @returns {object} - A JSON response containing a success message and the newly created record, or an error message
 */

export const createSubDetail = async (req, res) => {
  const type = req.query.type; // Get the type (brand, category, etc.)
  const { name, description } = req.body; // Data to be added

  // Select the appropriate model based on the type
  let model;
  switch (type) {
    case "brand":
      model = BrandModel;
      break;
    case "category":
      model = CategoryModel;
      break;
    case "subcategory":
      model = SubCategoryModel;
      break;
    case "material":
      model = MaterialModel;
      break;
    case "size":
      model = SizeModel;
      break;
    default:
      return res.status(400).json({ message: "Invalid type provided." });
  }

  try {
    // Check if a record with the same name already exists (optional)
    const existingRecord = await model.findOne({ name });
    if (existingRecord) {
      return res.status(409).json({ message: "Record already exists." });
    }

    // Create a new record
    const newRecord = new model({ name, description });
    const savedRecord = await newRecord.save();

    // Send success response
    res.status(201).json({
      message: `${type} added successfully.`,
      data: savedRecord,
    });
  } catch (error) {
    console.error("Error adding sub-detail:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

/**
 * @desc Fetch all sub-details of a specific type (brand, category, etc.)
 * @route GET /api/getSubDetail?type={type}
 * @access Public
 * @param {string} type - The type of sub-detail to fetch (e.g., "brand", "category", "subcategory", "material", "size")
 * @returns {object} - A JSON response containing a success message and an array of records, or an error message
 */
export const getSubDetails = async (req, res) => {
  const type = req.query.type; // Get the type (brand, category, etc.)

  // Select the appropriate model based on the type
  let model;
  switch (type) {
    case "brand":
      model = BrandModel;
      break;
    case "category":
      model = CategoryModel;
      break;
    case "subcategory":
      model = SubCategoryModel;
      break;
    case "material":
      model = MaterialModel;
      break;
    case "size":
      model = SizeModel;
      break;
    default:
      return res.status(400).json({ message: "Invalid type provided." });
  }

  try {
    // Fetch all records of the selected model
    const records = await model.find();

    // Send success response with the data
    res.status(200).json({
      message: `${type} details fetched successfully.`,
      data: records,
    });
  } catch (error) {
    console.error("Error fetching sub-detail:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

/**
 * @desc Delete a single sub-detail of a specific type (brand, category, etc.)
 * @route DELETE /api/delete-subdetails/:id?type={type}
 * @access Public
 * @param {string} type - The type of sub-detail to delete (e.g., "brand", "category", "subcategory", "material", "size")
 * @param {string} id - The ID of the sub-detail to delete
 * @returns {object} - A JSON response containing a success message and the deleted record, or an error message
 */
export const deleteSubdetials = async (req, res) => {
  // Delete all sub-details of a specific type (brand, category, etc.)
  try {
    const type = req.query.type;
    // Get the type (brand, category, etc.)
    const { id } = req.params;
    let model;
    switch (type) {
      case "brand":
        model = BrandModel;
        break;
      case "category":
        model = CategoryModel;
        break;
      case "subcategory":
        model = SubCategoryModel;
        break;
      case "material":
        model = MaterialModel;
        break;
      case "size":
        model = SizeModel;
        break;
      default:
        return res.status(400).json({ message: "Invalid type provided." });
    }
    const deleteItem = await model.findByIdAndDelete({ _id: id });
    if (deleteItem) {
      return res.status(204).json({ message: "Item Deleted Successfully" });
    } else {
      return res.status(404).json({ message: "Item Not Found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error." });
  }
};


export const updateSubdetails = async (req, res) => {
  try {
    const type = req.query.type;    // Get the type (brand, category, etc.)
    const { id } = req.params;      // Get the ID from URL params
    const { name } = req.body;      // Get updated name from request body

    // Input validation
    if (!name || !name.trim()) {
      return res.status(400).json({ message: "Name is required" });
    }

    let model;
    // Determine which model to use based on type
    switch (type) {
      case "brand":
        model = BrandModel;
        break;
      case "category":
        model = CategoryModel;
        break;
      case "subcategory":
        model = SubCategoryModel;
        break;
      case "material":
        model = MaterialModel;
        break;
      case "size":
        model = SizeModel;
        break;
      default:
        return res.status(400).json({ message: "Invalid type provided." });
    }

    // Check if name already exists (excluding current item)
    const existingItem = await model.findOne({ 
      name: name.trim(),
      _id: { $ne: id } // Exclude current item from check
    });

    if (existingItem) {
      return res.status(400).json({ 
        message: `${type.charAt(0).toUpperCase() + type.slice(1)} with this name already exists` 
      });
    }

    // Update the item
    const updatedItem = await model.findByIdAndUpdate(
      id,
      { name: name.trim() },
      { new: true } // Return updated document
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res.status(200).json({
      message: "Item updated successfully",
      data: updatedItem
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

