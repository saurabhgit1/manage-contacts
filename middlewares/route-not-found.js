const routeNotFound = (req, res) => {
  res.status(404).json({ msg: "path not found" });
};

export default routeNotFound;
