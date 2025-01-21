/* eslint-disable no-undef */
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGO_URI
    );
    console.log(`MongoDB Connected ${connect.connection.host}`);
  } catch (error) {
    console.log(error);

    console.log(`Error : ${error.message}`);
    // process.exit(1)
  }
};

export default connectDB;
