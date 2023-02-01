const orderData = require("../models/order");
const resturantData = require("../models/resturant");
const userData = require("../models/user");

// order placed

const orderPlaced = async (req, res) => {
  try {
    const {
      items,
      status,
      user: { email, address, name, userId },
      resturant: { phone, resturantName, resturantId },
    } = req.body;

    const order = new orderData({
      items,
      status,
      user: {
        email,
        address,
        name,
        userId,
      },
      resturant: {
        phone,
        name: resturantName,
        resturantId,
      },
    });

    const savedOrder = await order.save();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  get all order

const getAllOrder = async (req, res) => {
  try {
    const order = await orderData.find();
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get one order

const getOneOrder = async (req, res) => {
  try {
    const order = await orderData.findById(req.params.id);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update order

const updateOrder = async (req, res) => {
  try {
    const order = await orderData.findById(req.params.id);
    if (order) {
      order.status = req.body.status;
      const updatedOrder = await order.save();
      res.status(200).json(updatedOrder);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// cancel order

const cancelOrder = async (req, res) => {
  try {
    const order = await orderData.findById(req.params.id);
    if (order) {
      order.status = "cancelled";
      const updatedOrder = await order.save();
      res.status(200).json(updatedOrder);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get all order of a user

const getAllUserOrder = async (req, res) => {
  try {
    const order = await orderData.find({ "user.userId": req.params.id });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get all order of a resturant

const getAllResturantOrder = async (req, res) => {
  try {
    const order = await orderData.find({
      "resturant.resturantId": req.params.id,
    });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    orderPlaced,
    getAllOrder,
    getOneOrder,
    updateOrder,
    cancelOrder,
    getAllUserOrder,
    getAllResturantOrder,
}