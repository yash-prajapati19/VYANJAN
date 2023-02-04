const resturantData = require("../models/resturant");

// get all resturantData

const getAllResturant = async (req, res) => {
  try {
    const resturant = await resturantData.find();
    res.status(200).json(resturant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get one resturantData

const getOneResturant = async (req, res) => {
  try {
    const resturant = await resturantData.findById(req.params.id);
    res.status(200).json(resturant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update resturantData

const updateResturant = async (req, res) => {
  try {
    const resturant = await resturantData.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(resturant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllResturant,
  getOneResturant,
  updateResturant,
};
