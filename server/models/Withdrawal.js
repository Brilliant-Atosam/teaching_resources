const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  id: String,
  amount: Number,
  accountNumber: String,
});
