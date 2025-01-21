/* eslint-disable no-undef */
import express from 'express';
import userRoute from './routes/userRoute.js';
import adminRoute from './routes/adminRoute.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';

dotenv.config();

const port = process.env.port || 7008;
const app = express();

// Connect to the database
connectDB();

// Enable CORS
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true, // Enable credentials
  })
);

// Enable file uploads
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/', 
    createParentPath: true,
  }));

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all incoming requests (for debugging)
// app.use((req, res, next) => {
//   console.log(`Incoming ${req.method} request to ${req.url}`);
//   console.log('Body:', req.body);
//   console.log('Files:', req.files);
//   next();
// });

// Define routes
app.use('/admin', adminRoute);
app.use('/user', userRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});