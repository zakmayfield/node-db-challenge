const express = require('express')
const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "server error" })
    })
})

router.get('/resources', (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "server error" })
    })
})

router.get('/:id/tasks', (req, res) => {
  Projects.getProjectTasks(req.params.id)
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "server error" })
    })
})

router.post('/', (req, res) => {
  Projects.addProject(req.body)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "server error" })
    })
})

router.post('/resources', (req, res) => {
  Projects.addResource(req.body)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "server error" })
    })
})

router.post('/:id/tasks', (req, res) => {
  let taskData = req.body;
  taskData = { ...taskData, project_id: req.params.id}

  Projects.addTask(taskData)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "server error" })
    })
})

module.exports = router;