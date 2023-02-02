const userData = require("../models/user");

// register user

const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      address: { street, aptName, locality, zip, lat, lng, phoneNo },
    } = req.body;

    const formattedAdd = `${street}, ${aptName}, ${locality}, ${zip}, ${lat}, ${lng}, ${phoneNo}`;

    const user = new userData({
      firstName,
      lastName,
      email,
      formattedAddress: formattedAdd,
      address: {
        street,
        aptName,
        locality,
        zip,
        lat,
        lng,
        phoneNo,
      },
    });

    const savedUser = await user.save();

    return res.status(200).json({
      user: savedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// login user

// ------------------------ this not set yet -----------------------------

module.exports = {
    registerUser,
};