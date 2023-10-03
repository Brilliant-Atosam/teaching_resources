const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  token: String,
});
const Refresh_token = mongoose.model("Refresh_token", schema);
module.exports = Refresh_token;
