const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: String,
  buyerInfo: Object,
  materialInfo: Object,
});

module.exports = mongoose.model("Purchase", schema);
