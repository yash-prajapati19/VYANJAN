const resturantData = require("../models/resturant");

// get all resturantData

const getAllResturant = (req, res) => {
  try {
    const resturant = resturantData.find();
    res.status(200).json(resturant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get one resturantData

const getOneResturant = (req, res) => {
  try {
    const resturant = resturantData.findById(req.params.id);
    res.status(200).json(resturant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllResturant,
  getOneResturant,
};
