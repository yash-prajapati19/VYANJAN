const resturantData = require("../models/resturant")

// get all resturantData

const getAllResturant = (req, res) => {
    try {
        const resturant = resturantData.find();
        res.status(200).json(resturant);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

// get one resturantData

const getOneResturant = (req, res) => {
    try {
        const resturant = resturantData.findById(req.params.id);
        res.status(200).json(resturant);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

// create resturantData

const createResturant = (req, res) => {
    try {
        const {
            name,
            tags,
            formattedAddress,
            imageUrl,
            address : {
                street,
                aptName,
                locality,
                zip,
                lat,
                lng,
                phoneNo
            },
            minOrderAmount,
            costForOne,
            payment,
            account,
            items
        } = req.body;

        const resturant = new resturantData({
            name,
            tags,
            formattedAddress,
            imageUrl,
            address : {
                street,
                aptName,
                locality,
                zip,
                lat,
                lng,
                phoneNo
            },
            minOrderAmount,
            costForOne,
            payment,
            account,
            items
        });

        const newResturant = resturant.save();
        res.status(201).json(newResturant);
    } catch(err) {
        res.status(500).json({ message : err.message })
    }
}