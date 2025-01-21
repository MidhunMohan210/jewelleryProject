import streamifier from "streamifier";
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
 * Uploads an image file to Cloudinary.
 * @param {string} filePath - The path of the file to upload.
 * @param {Object} options - Cloudinary upload options (e.g., folder name).
 * @returns {Promise<Object>} - Cloudinary upload response.
 */
export const uploadImageToCloudinary = async (filePath, options = {}) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, options);
    return result;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
};

/**
 * Extracts the public ID from a Cloudinary URL.
 * @param {string} imageUrl - The URL of the image on Cloudinary.
 * @returns {string|null} - The public ID of the image or null if not found.
 */
export const  getCloudinaryPublicId = (imageUrl) =>{
  const regex = /\/(?:v\d+\/)?(?<folderPath>[\w-]+\/)?(?<fileName>[\w-]+)\.\w+$/;
  const match = imageUrl.match(regex);
  if (match && match.groups) {
    const { folderPath, fileName } = match.groups;
    return `${folderPath || ""}${fileName}`; // Include folder path in the public ID
  }
  return null;
}

