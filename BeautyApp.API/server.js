'use strict'

const app = require('../BeautyApp.Api/bin/express');
const variables = require('../BeautyApp.Api/bin/configuration/variables');

app.listen(variables.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});