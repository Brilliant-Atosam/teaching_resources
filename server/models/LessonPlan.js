const mongoose = require("mongoose");
const { marked } = require("marked");
const { JSDOM } = require("jsdom");
const createDomPurify = require("dompurify");
const dompurify = createDomPurify(new JSDOM().window);
const lessonPlanSchema = new mongoose.Schema({
  title: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  downloads: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  stream: String,
  year: String,
  comments: [],
  cover: String,
  file: String,
  uploadedAt: String,
  description: String,
});
lessonPlanSchema.pre("save", function (next) {
  if (this.description) {
    this.description = dompurify.sanitize(marked(this.description));
  }
  next();
});
module.exports = mongoose.model("LessonPlan", lessonPlanSchema);
