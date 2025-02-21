const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  githubLink: { type: String },
  liveDemo: { type: String },
  photo: { type: String, required: true },
});

module.exports = mongoose.model("Project", ProjectSchema);
