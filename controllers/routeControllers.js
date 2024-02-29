import CustomErrors from "../errors/custom-errors.js";
import contactModel from "../model/contactModel.js";
import { StatusCodes } from "http-status-codes";

const getAllContacts = async (req, res, next) => {
  try {
    const contact = await contactModel.find({ createdBy: req.user.id });
    res.json(contact);
  } catch (error) {
    next(error);
  }
};
const createContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const resp = await contactModel.create({
      name,
      email,
      phone,
      createdBy: req.user.id,
    });
    res.json({ msg: resp });
  } catch (error) {
    next(error);
  }
};
const updateContact = async (req, res, next) => {
  try {
    const contact = await contactModel.findById(req.params.id);
    if (contact) {
      if (contact.createdBy === req.user.id) {
        const updatedContact = await contactModel.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );
      } else {
        return next(
          new CustomErrors(
            "Contact was not created by user",
            StatusCodes.NOT_ACCEPTABLE
          )
        );
      }
    }

    res.status(StatusCodes.ACCEPTED).json(updatedContact);
  } catch (error) {
    next(error);
  }
};
const deleteContact = async (req, res, next) => {
  try {
    const contact = await contactModel.findById(req.params.id);
    if (contact) {
      if (contact.createdBy === req.user.id) {
        await contactModel.findByIdAndDelete(req.params.id);
      } else {
        return next(
          new CustomErrors(
            "Contact was not created by user",
            StatusCodes.NOT_ACCEPTABLE
          )
        );
      }
    }
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
