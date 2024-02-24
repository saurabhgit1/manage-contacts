import CustomErrors from "./custom-errors.js";
import { StatusCodes } from "http-status-codes";

class BadRequestErrors extends CustomErrors {
  constructor(msg) {
    super(msg, StatusCodes.BAD_REQUEST);
  }
}
export default BadRequestErrors;
