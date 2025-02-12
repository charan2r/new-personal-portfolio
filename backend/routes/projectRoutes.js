const express = require('express');
const Project = require('../models/projects');

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error("No Projects were found", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add a project
router.post('/add', async (req, res) => {
    try {
        const { title, description, technologies, githubLink, liveDemo, photo } = req.body;
        const project = new Project({ title, description, technologies, githubLink, liveDemo, photo });
        await project.save();
        res.json({ message: "Project added successfully" });
    } catch (error) {
        console.error("Project creation error", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;