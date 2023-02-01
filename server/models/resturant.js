const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressInfo = {
  street: String,
  aptName: String,
  locality: String,
  zip: String,
  lat: Number,
  lng: Number,
  phoneNo: Number,
};

const resturantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    imageUrl: [
      {
        type: String,
        required: true,
      },
    ],
    address: addressInfo,
    minOrderAmount: Number,
    costForOne: Number,
    payment: [
      {
        type: String,
        // enum: ["CASH", "ONLINE_PAYMENT", "UPI"],
        required: true,
      },
    ],
    admin_id: { type: Schema.Types.ObjectId, required: true, ref: "AdminData" },
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resturant", resturantSchema);