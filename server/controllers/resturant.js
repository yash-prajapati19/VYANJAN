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

const createResturant = async (req, res) => {
    try {
        const {
            name,
            tags,
            imageUrl,
            address: {
                street,
                aptName,
                locality,
                zip,
                lat,
                lng,
                phoneNo
            },
            items,
            admin_id
        } = req.body;

        console.log(req.body);

        const formattedAdd = `${street}, ${aptName}, ${locality}, ${zip}, ${lat}, ${lng}, ${phoneNo}`;

        const resturant = new resturantData({
            name,
            tags,
            imageUrl,
            address: {
                street,
                aptName,
                locality,
                zip,
                lat,
                lng,
                phoneNo
            },
            formattedAddress: formattedAdd,
            items,
            admin_id
        });

        const newResturant = resturant.save();
        res.status(201).json(resturant);
    } catch(err) {
        res.status(500).json({ message : err.message })
    }
}


module.exports = {
    getAllResturant,
    getOneResturant,
    createResturant
}