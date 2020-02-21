const db = require('../data/db-config.js');

module.exports = {
  getProjects,
  getResources,
  getProjectTasks,
  addProject,
  addResource,
  addTask
}

function getProjects() {
  return db('projects')
}

function getResources() {
  return db('resources')
}

function getProjectTasks(id) {
  return db('tasks')
    .select(
      'tasks.step_number as Step Number',
      'tasks.description',
      'projects.name'
    )
    .join('projects', 'tasks.project_id', 'projects.id')
    .orderBy('tasks.step_number')
    .where('projects.id', id)
}

function addProject(project) {
  return db('projects')
    .insert(project)
}

function addResource(resource) {
  return db('resources')
    .insert(resource)
}

function addTask(task) {
  return db('tasks')
    .insert(task)
}