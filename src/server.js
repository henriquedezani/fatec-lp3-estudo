const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://fatec-lp3:fatec-lp3@cluster0-ovdbf.mongodb.net/dbtarefas?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const routes = require('./routes');
app.use('/api', routes);

app.listen(process.env.PORT || 3000);