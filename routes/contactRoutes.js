import express from "express";
import { getAllContacts } from "../controllers/routeControllers.js";

const contactRouter = express.Router();

contactRouter.route("/").get(getAllContacts)

export default contactRouter;