const itemData = require("../models/item");

// create item by resturant

const createItem = async (req, res) => {
  try {
    const { title, description, tags, imageUrl, price, creator } = req.body;

    const item = new itemData({
      title,
      description,
      tags,
      imageUrl,
      price,
      creator,
    });

    const savedItem = await item.save();
    res.status(200).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get all item by resturant

const getAllResturantItem = async (req, res) => {
  try {
    const item = await itemData.find({ creator: req.params.id });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  get one item

const getOneItem = async (req, res) => {
  try {
    const item = await itemData.findById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update item

const updateItem = async (req, res) => {
  try {
    await itemData.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
      },
    });

    res.status(200).json({ message: "Item updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete item

const deleteItem = async (req, res) => {
    try {
        await itemData.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createItem,
    getAllResturantItem,
    getOneItem,
    updateItem,
    deleteItem,
};
