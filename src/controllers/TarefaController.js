const mongoose = require('mongoose');
_ = require('../models/Tarefa');

const Tarefa = mongoose.model('Tarefa');

const tarefaController = {

    async create (req, res) {
        const tarefa = await Tarefa.create(req.body);
        return res.json(tarefa);
    },

    async read(req, res) {
        const tarefas = await Tarefa.find();
        return res.json(tarefas);
    },

    async update (req, res) {
        try {
            var id = req.params.id;
            const tarefa = await Tarefa.findByIdAndUpdate(id, req.body, { new: true});
            return res.json(tarefa);
        } catch(error) {
            return res.status(400).send({mensagem: 'Falha ao atualizar a tarefa'});
        }
    },

    async delete (req, res) {
        var id = req.params.id;
        const tarefa = await Tarefa.findByIdAndDelete(id);
        return res.json({mensagem: 'Tarefa apagada com sucesso.'});
    }
};

module.exports = tarefaController;