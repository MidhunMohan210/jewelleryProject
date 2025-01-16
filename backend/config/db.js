import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  try {

    // console.log(process.env.MONGO_URI,'url')
    const connect = await mongoose.connect('mongodb+srv://webox2525:jewelery123@cluster0.ohakl.mongodb.net/jewelery-database?retryWrites=true&w=majority');
    // console.log(`MongoDB Connected ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    
    console.log(`Error : ${error.message}`);
    // process.exit(1)
  }
};

export default connectDB;