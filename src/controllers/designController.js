import Design from "../models/projectModel.js";

export const createProject = async (
  req,
  res
) => {
  try {
    const project =
      await Design.create(req.body);

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message:
        "Unable to create project",
      error: error.message,
    });
  }
};

export const getProjects = async (
  req,
  res
) => {
  try {
    const projects =
      await Design.find().sort({
        createdAt: -1,
      });

    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message:
        "Unable to fetch projects",
    });
  }
};

export const getProjectById = async (
  req,
  res
) => {
  try {
    const project =
      await Design.findById(
        req.params.id
      );

    if (!project) {
      return res
        .status(404)
        .json({
          message:
            "Project not found",
        });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({
      message:
        "Unable to fetch project",
    });
  }
};

export const updateProject = async (
  req,
  res
) => {
  try {
    const project =
      await Design.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.json(project);
  } catch (error) {
    res.status(500).json({
      message:
        "Unable to update project",
    });
  }
};

export const deleteProject = async (
  req,
  res
) => {
  try {
    await Design.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Unable to delete project",
    });
  }
};