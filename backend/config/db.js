import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://webox_jewlery:Jewlery123@cluster0.ohakl.mongodb.net/jewllery?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB Connected ${connect.connection.host}`);
  } catch (error) {
    console.log(error);

    console.log(`Error : ${error.message}`);
    // process.exit(1)
  }
};

export default connectDB;
