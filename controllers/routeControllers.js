const getAllContacts = (req, res, next) => {
  try {
    res.json({ msg: "get all contacts" });
  } catch (error) {
    next(error);
  }
};
const createContact = (req, res, next) => {
  try {
    res.json({ msg: "create contacts" });
  } catch (error) {
    next(error);
  }
};
const updateContact = (req, res, next) => {
  try {
    res.json({ msg: "update contacts" });
  } catch (error) {
    next(error);
  }
};
const deleteContact = (req, res, next) => {
  try {
    res.json({ msg: "delete contacts" });
  } catch (error) {
    next(error);
  }
};
const getContact = (req, res, next) => {
  try {
    res.json({ msg: "get contact" });
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
