const mongoose = require('mongoose');

const Tarefa = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    concluida: {
        type: Boolean,
        require: true
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Tarefa', Tarefa);