import Project from "../models/Project.js";

export const getProjects = async (req,res) => {
  try {
    const search = req.query.search || "";

    const category = req.query.category || "";

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 6;

    const skip = (page - 1) * limit;

    const query = {};

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }

    if (category) {
      query.category = category;
    }

    const totalProjects = await Project.countDocuments(
       query
    );

    const projects = await Project.find(query).skip(skip).limit(limit);

    res.status(200).json({
        success: true,
        currentPage: page,
        totalPages: Math.ceil( totalProjects / limit ),
        totalProjects,
        data: projects,
    });

  } catch (error) {
    res.status(500).json({
      status : false,
      error: error.message,
    });
  }
};

export const getProjectById = async (req, res) => {
    const projectId = req.params.id;
    try {
        const project = await Project.findById(projectId);

        if(!project) {
            res.status(404).json({
                success: false,
                message: "Project Not Found",
            });
        }
        res.status(200).json({
            success: true,
            data: project,
        });
    } catch (error) {
        res.status(500).json({ 
            status : false,
            error : error.message
        });
    }
};

export const createProject = async (req, res) => {
    const projectDetails = req.body;
    try {
        const project = await Project.create(projectDetails);

        if(!project){
            return res.status(400).json({
                status : false,
                message : "Project Not Created Check Details Correctly and Submit Again"
            });
        }

        res.status(201).json({
            success: true,
            data: project,
        });
    } catch (error) {
        res.status(500).json({ 
            status : false,
            error : error.message
        });
    }
};

export const updateProject = async (req,res) => {
    try {
        const project = await Project.findByIdAndUpdate( req.params.id, req.body,
        {
            new: true,
            runValidators: true,
        });

        if (!project) {
            return res.status(404).json({
                status : false,
                message: "Project not Updated"
            });
        }

        res.status(200).json({
            success: true,
            data: project,
        });
    } catch (error) {
        res.status(500).json({ 
            status : false,
            error : error.message
        });
    }
};

export const deleteProject = async (req,res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
        return res.status(404).json({
        message: "Project not found",
        });
    }

    res.status(200).json({
            success: true,
            message : "Project Deleted Successfully"
        });
  } catch (error) {
    res.status(500).json({ 
        status : false,
        error : error.message
    });
  }
};