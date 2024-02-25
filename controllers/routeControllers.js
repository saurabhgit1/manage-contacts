import CustomErrors from "../errors/custom-errors.js";
import contactModel from "../model/contactModel.js";
import { StatusCodes } from "http-status-codes";

const getAllContacts = async (req, res, next) => {
  try {
    const contact = await contactModel.find();
    res.json(contact);
  } catch (error) {
    next(error);
  }
};
const createContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const resp = await contactModel.create({ name, email, phone });
    res.json({ msg: resp });
  } catch (error) {
    next(error);
  }
};
const updateContact = async (req, res, next) => {
  try {
    const updatedContact = await contactModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(StatusCodes.ACCEPTED).json(updatedContact);
  } catch (error) {
    next(error);
  }
};
const deleteContact = async (req, res, next) => {
  try {
    const contact = await contactModel.findById(req.params.id);
    if (!contact) {
      return next(new CustomErrors("Contact not found", StatusCodes.NOT_FOUND));
    }
    await contactModel.findByIdAndDelete(req.params.id);
    res.json({ msg: "delete contacts" });
  } catch (error) {
    next(error);
  }
};
const getContact = async (req, res, next) => {
  try {
    const contact = await contactModel.findById(req.params.id);
    if (!contact) {
      // return next(new CustomErrors("Contact Not Found", StatusCodes.NOT_FOUND));
      throw new CustomErrors("Contact Not Found", StatusCodes.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json(contact);
  } catch (error) {
    next(error);
  }
};

export {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
};
