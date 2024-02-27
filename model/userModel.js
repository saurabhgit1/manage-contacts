import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide user name"],
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      unique: [true, "email already present"],
    },
    password: {
      type: String,
      required: [true, "please provide password"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
