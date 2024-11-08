
const Project = require('../model/projectModel');

exports.addProject = async (req, res) => {
    const { name, description, image } = req.body;

    if (!name || !description || !image) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newProject = new Project({
            name,
            description,
            image
        });

        await newProject.save();

        res.status(201).json({ message: "Project created successfully", project: newProject });
    } catch (error) {
        console.error("Error creating project:", error);
        res.status(500).json({ message: "Error creating project", error: error.message });
    }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find(); // Get all projects from the database
        res.status(200).json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ message: "Error fetching projects", error: error.message });
    }
};
