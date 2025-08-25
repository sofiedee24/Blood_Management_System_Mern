const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/BMS";
//mongodb://localhost:27017/BMS

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
