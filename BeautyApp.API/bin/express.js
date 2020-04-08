const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('./configuration/variables');
//route 


const categoryRouter = require('../routes/category-router');

const calendarRouter = require('../routes/calendar-router');

const dayRouter = require('../routes/dia-router');

const userRouter = require('../routes/usuario-router');

const horarioRouter = require('../routes/horario-router');

const statusRouter = require('../routes/status-router');

const clienteRouter = require('../routes/cliente-router');

const pagamentoRouter = require('../routes/pagamento-router');

const beneficioRouter = require('../routes/beneficio-router');

const tipoBeneficioRouter = require('../routes/tipoBeneficio-router');

const servicoRouter = require('../routes/servico-router');

const localizacaoRouter = require('../routes/localizacao-router');

const empreendedorRouter = require('../routes/empreendedor-router');

const estabelecimentoRouter = require('../routes/estabelecimento-router');

const enderecoRouter = require('../routes/endereco-router');

const bairroRouter = require('../routes/bairro-router');

const cidadeRouter = require('../routes/cidade-router');

const ufRouter = require('../routes/uf-router');

const paisRouter = require('../routes/pais-router')
//Criando/Invocando a Api/Server Web do Express
//Configuração de parse do JSON
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// configurando a conexão com o banco de dados

mongoose.connect(variables.Database.connection, { useNewUrlParser: true});

//Configurando as rotas

app.use('/api/Category', categoryRouter);

app.use('/api/agenda', calendarRouter);

app.use('/api/dia', dayRouter);

app.use('/api/Usuario', userRouter);

app.use('/api/horario', horarioRouter);

app.use('/api/status', statusRouter);

app.use('/api/cliente', clienteRouter);

app.use('/api/pagamento', pagamentoRouter);

app.use('/api/beneficio', beneficioRouter);

app.use('/api/tipo_beneficio', tipoBeneficioRouter);

app.use('/api/servico', servicoRouter);

app.use('/api/localizacao',localizacaoRouter);

app.use('/api/Empreendedor', empreendedorRouter);

app.use('/api/Estabelecimento', estabelecimentoRouter);

app.use('/api/endereco', enderecoRouter);

app.use('/api/bairro', bairroRouter);

app.use('/api/Cidade', cidadeRouter);

app.use('/api/uf', ufRouter);

app.use('/api/Pais', paisRouter);
//Exportando nossa Api
module.exports = app;
