import streamifier from 'streamifier';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dayokqiul',
  api_key: '998382992982661',
  api_secret: 'B8kmPp48DvZAZku9BI74uI9A0hE',
});


/**
 * Uploads an image buffer to Cloudinary
 * @param {Buffer} buffer - The image buffer.
 * @param {Object} options - Cloudinary upload options (e.g., folder name).
 * @returns {Promise<Object>} - Cloudinary upload response.
 */
// export const uploadImageBufferToCloudinary = async (buffer, options = {}) => {
//   return new Promise((resolve, reject) => {
//     const uploadStream = cloudinary.uploader.upload_stream(options, (error, result) => {
//       if (error) {
//         // console.log(error,'error while yodlo')
//         reject(error);
//       } else {
//         resolve(result);
//       }
//     });

//     streamifier.createReadStream(buffer).pipe(uploadStream);
//   });
// };

export const uploadImageToCloudinary = async (filePath, options = {}) => {
    try {
      const result = await cloudinary.uploader.upload(filePath, options);
      return result;
    } catch (error) {
      throw error;
    }
  };