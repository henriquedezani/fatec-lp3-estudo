const express = require('express');
const routes = express.Router();

const tarefaController = require('./controllers/TarefaController');

routes.post('/tarefa', tarefaController.create);
routes.get('/tarefa', tarefaController.read);
routes.put('/tarefa/:id', tarefaController.update);
routes.delete('/tarefa/:id', tarefaController.delete);

module.exports = routes;