const Project = require("../models/project");

const submitProject = async (req, res) => {
  try {
    const { from_name, from_email, project_type, timeline, message } = req.body;

    const newProject = new Project({
      from_name,
      from_email,
      project_type,
      timeline,
      message,
    });

    await newProject.save();

    res.status(200).json({
      success: true,
      message: "✅ Project stored successfully in MongoDB",
    });
  } catch (error) {
    console.error("❌ Error in submitProject:", error);
    res.status(500).json({
      success: false,
      message: "Server error while saving project",
    });
  }
};

module.exports = { submitProject };
