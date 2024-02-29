import express from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/userControllers.js";
import tokenAuthentication from "../middlewares/token-authentication.js";

const userRouter = express.Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/current").get(tokenAuthentication, currentUser);

export default userRouter;
