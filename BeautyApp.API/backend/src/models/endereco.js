'use strict'


const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const EnderecoSchema = new schema({

    rua: { type: String, required: true},
    numero:{type: Number, required: true},
    bairro:{type: String, required: true},
    cidade:{type: String},
    cep: {type: Number, required: true}


});

module.exports = mongoose.model('Endereco',EnderecoSchema );

