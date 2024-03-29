const mongoose = require("mongoose");
const { marked } = require("marked");
const { JSDOM } = require("jsdom");
const createDomPurify = require("dompurify");
const dompurify = createDomPurify(new JSDOM().window);
const videoSchema = new mongoose.Schema({
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
  thumbnail_url: String,
  video_url: String,
  comments: [],
  stream: String,
  year: String,
  subject: String,
  playlist: String,
  tags: [],
  description: String,
});
videoSchema.pre("save", function (next) {
  if (this.description) {
    this.description = dompurify.sanitize(marked(this.description));
  }
  next();
});
module.exports = mongoose.model("Video", videoSchema);
