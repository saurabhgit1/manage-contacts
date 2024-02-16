import express from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContact,
  updateContact,
} from "../controllers/routeControllers.js";

const contactRouter = express.Router();

contactRouter.route("/").get(getAllContacts).post(createContact);
contactRouter
  .route("/:id")
  .put(updateContact)
  .delete(deleteContact)
  .get(getContact);

export default contactRouter;
