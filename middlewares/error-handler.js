import CustomErrors from "../errors/custom-errors.js";

const errorHandler = (error, req, res,next) => {
  const customError = {
    msg: error.message || "Internal Server Error!!!",
    statusCode: error.statusCode || 500,
  };
  res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorHandler;
