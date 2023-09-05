const mongoose = require("mongoose");
const { marked } = require("marked");
const { JSDOM } = require("jsdom");
const createDomPurify = require("dompurify");
const dompurify = createDomPurify(new JSDOM().window);
const schema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  author: {},
  description: String,
  price: Number,
  sales: Number,
  reveiws: [],
  rating: String,
  cover: String,
});
schema.pre("save", function (next) {
  if (this.description) {
    this.description = dompurify.sanitize(marked(this.description));
  }
  next();
});
module.exports = mongoose.model("Material", schema);
