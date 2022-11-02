const mongoose = require("mongoose");
const marked = require("marked");
const { JSDOM } = require("jsdom");
const createDomPurify = require("dompurify");
const dompurify = createDomPurify(new JSDOM().window);
const schema = new mongoose.Schema({
  teacherID: String,
  teacherNAme: String,
  id: String,
  name: String,
  type: String,
  description: String,
  price: Number,
  sales: Number,
  reveiws: [],
  cover: String,
});
schema.pre("save", function (next) {
  this.description = dompurify.sanitize(marked(this.description));
  next();
});
module.exports = mongoose.model("Material", schema);
