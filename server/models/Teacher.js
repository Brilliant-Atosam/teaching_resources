const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { marked } = require("marked");
const { JSDOM } = require("jsdom");
const createDomPurify = require("dompurify");
const dompurify = createDomPurify(new JSDOM().window);
const schema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  phone: String,
  institution: String,
  bioDate: {
    type: String,
    default: "# this is h1",
  },
  bio: {
    type: String,
    default: "![alt text](https://www.markdownguide.org/assets/images/tux.png)",
  },
  subjectAreas: [],
  password: String,
  profile: String,
  resetLink: String,
  createdAt: String,
});
schema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  if (this.bio) {
    this.bio = dompurify.sanitize(marked(this.bio));
  }
  next();
});
module.exports = mongoose.model("Teacher", schema);
