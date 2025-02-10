import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  githubLink: { type: String },
  liveDemo: { type: String },
});

export default mongoose.model("Project", ProjectSchema);
