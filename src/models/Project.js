import mongoose from "mongoose";

const projectSchema =
  new mongoose.Schema(
    {
      title: String,

      category: String,

      description: String,

      longDescription: String,

      image: String,

      screenshots: [String],

      technologies: [String],

      features: [String],

      challenges: [String],

      stats: [
        {
          label: String,
          value: String,
        },
      ],

      liveLink: String,

      githubLink: String,
    },
    {
      timestamps: true,
    }
  );

const Project =
  mongoose.model(
    "Project",
    projectSchema
  );

export default Project;