const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const variables = require('./configuration/variables');

//Routers

const userRouter = require('../routers/user-router');

//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// configurando a conexão com o banco de dados

mongoose.connect(variables.Database.connection, { useNewUrlParser: true});

app.use(cors());

//Configurando rotas

app.use('/User', userRouter);

module.exports = app;