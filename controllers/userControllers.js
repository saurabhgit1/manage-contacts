import BadRequestErrors from "../errors/bad-request-errors.js";
import CustomErrors from "../errors/custom-errors.js";
import userModel from "../model/userModel.js";
import { StatusCodes } from "http-status-codes";

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return next(new BadRequestErrors("username, email and pwd is required"));
    }

    const userAvailable = await userModel.findOne({ email });
    if (userAvailable) {
      return next(
        new CustomErrors("user already exists", StatusCodes.CONFLICT)
      );
    }
    const user = await userModel.create({ username, email, password });
    if (user) {
      res.status(StatusCodes.OK).json(user);
    }
  } catch (error) {
    next(error);
  }
};

const loginUser = (req, res, next) => {
  try {
    console.log("login");
  } catch (error) {
    next(error);
  }
};
const currentUser = (req, res, next) => {
  try {
    console.log("current");
  } catch (error) {
    next(error);
  }
};

export { registerUser, loginUser, currentUser };
