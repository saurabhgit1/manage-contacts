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
      res.status(StatusCodes.CREATED).json({ id: user.id, email: user.email });
    }
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    const pwdMatched = user.matchPassword(password);
    if (pwdMatched) {
      const token = user.createJWT();
      res.status(StatusCodes.OK).json({ email: email, token });
    }
  } catch (error) {
    next(error);
  }
};
const currentUser = (req, res, next) => {
  try {
    res.status(StatusCodes.OK).json({ user: req.user });
  } catch (error) {
    next(error);
  }
};

export { registerUser, loginUser, currentUser };
