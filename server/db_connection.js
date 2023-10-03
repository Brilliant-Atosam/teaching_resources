const mongoose = require("mongoose");
const { DB_URI } = require("./config.json");

const connectDB = async () => {
  try {
    await mongoose.connect( DB_URI);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
