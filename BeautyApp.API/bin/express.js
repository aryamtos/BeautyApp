const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const variables = require('./configuration/variables');

//Routers


const Usuario = require('../routes/usuario-router');



//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// configurando a conexão com o banco de dados

mongoose.connect(variables.Database.connection, { useNewUrlParser: true});


app.use(cors());
//Configurando as rotas


app.use('/api/Usuario', Usuario);

//Exportando nossa Api
module.exports = app;


// Api -> MIDDLEWARES -> Rotas -> Controller -> Repository -> Banco