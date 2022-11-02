const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: String,
  buyerInfo: Object,
  material: Object,
});

module.exports = mongoose.model("Purchase", schema);
