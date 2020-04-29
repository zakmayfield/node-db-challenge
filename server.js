const express = require('express');

const projectsRouter = require('./projects/projects-router.js');

const server = express();


server.use(express.json());
server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
  res.send('<h2>Server is running</h2>')
})

module.exports = server;
