const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  donor: {
    type: String,
    required: [true, "Donor name is required"],
    trim: true,
  },
  bloodGroup: {
    type: String,
    required: [true, "Blood group is required"],
    trim: true,
    uppercase: true,
    enum: {
      values: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      message: "{VALUE} is not a valid blood group",
    },
  },
  volume: {
    type: Number,
    required: [true, "Volume is required"],
    min: [1, "Volume must be at least 1ml"],
  },
});

module.exports = mongoose.model("Donor", donorSchema, "Donors");
