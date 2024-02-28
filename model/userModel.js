import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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


userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);// check by removing await
});

userSchema.methods.matchPassword = async function (pwdByUser) {
  const match = await bcrypt.compare(pwdByUser, this.password);
  return match;
};
userSchema.methods.createJWT = function () {
  const token = jwt.sign(
    {
      user: { username: this.username, email: this.email, id: this.id },
    },
    "JWWWWWSECRETTT",
    { expiresIn: "30d" }
  );
  return token;
};
export default mongoose.model("User", userSchema);

