import mongoose from "mongoose";
const connectDB = async (url) => {
  try {
    return await mongoose.connect(url);
  } catch (error) {
    throw error;
  }
};

export default connectDB;
