const mongoose = require("mongoose");
const { marked } = require("marked");
const { JSDOM } = require("jsdom");
const createDomPurify = require("dompurify");
const dompurify = createDomPurify(new JSDOM().window);
const teachingNoteSchema = new mongoose.Schema({
  title: String,
  uploadedAt: String,
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  downloads: {
    type: Number,
    default: 0,
  },
  cover: String,
  note: String,
  comments: [],
  stream: String,
  year: String,
  description: String,
});

teachingNoteSchema.pre("save", function (next) {
  if (this.description) {
    this.description = dompurify.sanitize(marked(this.description));
  }
  next();
});
module.exports = mongoose.model("TeachingNote", teachingNoteSchema);
