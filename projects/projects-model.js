const db = require('../data/db-config.js');

module.exports = {
  getProjects,
  getResources,
  getProjectTasks,
  addProject,
  addResource,
  addTask,
  getFullDetails
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
      'projects.name as Project Name',
      'projects.description as Project Description',
      'tasks.notes as Notes'
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

function getFullDetails(id) {
  return db('projects')
    .select(
      'projects.name as Project Name',
      'tasks.step_number as Step Number',
      'tasks.description as Description',
      'resources.name as Resource'
    )
    .join(
      'tasks', 'tasks.project_id', 'projects.id'
    )
    .join('resources')
    .join('project_resources', 'resource_id', 'resources.id')
    .where('projects.id', id)
}