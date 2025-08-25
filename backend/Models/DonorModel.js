const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  Date: {
    type: Date,
    required: [true, "Date is required"],
  },
  Donor: {
    type: String,
    required: [true, "Donor name is required"],
    trim: true,
  },
  BloodGroup: {
    type: String,
    required: [true, "Blood group is required"],
    trim: true,
    uppercase: true,
    enum: {
      values: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      message: "{VALUE} is not a valid blood group",
    },
  },
  Volume: {
    type: Number,
    required: [true, "Volume is required"],
    min: [1, "Volume must be at least 1ml"],
  },
});

//module.exports = mongoose.model("DonorModel", donorSchema);
//baka tanggalin ko yung "Donors"
//module.exports = Products;

const DonorModel = mongoose.model("DonorModel", donorSchema)
module.exports = DonorModel;
