import CustomErrors from "./custom-errors.js";
import { StatusCodes } from "http-status-codes";

class AuthErrors extends CustomErrors {
  constructor(msg) {
    super(msg, StatusCodes.UNAUTHORIZED);
  }
}

export default AuthErrors;
