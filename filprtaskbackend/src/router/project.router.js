const express = require('express');
const router = express.Router();
const { addProject, getAllProjects } = require('../controller/project.controlller');

router.post('/add', addProject);

router.get('/', getAllProjects);

module.exports = router;
