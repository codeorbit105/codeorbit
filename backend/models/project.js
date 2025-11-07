const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  from_name: { type: String, required: true },
  from_email: { type: String, required: true },
  project_type: { type: String, required: true },
  timeline: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// ✅ Fix: check if model already exists before creating new one
module.exports =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
