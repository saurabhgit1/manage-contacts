import jwt from "jsonwebtoken";
import AuthErrors from "../errors/auth-errors.js";

const tokenAuthentication = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")?.[1];
      const decoded = jwt.verify(token, "JWWWWWSECRETTT");
      req.user = decoded.user;
      console.log("uuuu", req.user);
      next();
    } else {
      next(new AuthErrors("Invalid structure of token"));
    }
  } catch (error) {
    next(new AuthErrors("Invalid token"));
  }
};
export default tokenAuthentication;
