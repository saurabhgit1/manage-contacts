import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide created by"],
    },
    name: {
      type: String,
      required: [true, "please provide name"],
    },
    email: {
      type: String,
      required: [true, "please provide email"],
    },
    phone: {
      type: String,
      required: [true, "Please provide phone number"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("contact", contactSchema);
