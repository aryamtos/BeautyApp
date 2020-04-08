'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const cidadeModel = new schema({ //definição de campos

    nome_cidade: { trim: true, required: true, type: String},
    codigo_cidade:{type: Number, required: true, index: true, unique: true},
    codigo_uf:{type: mongoose.Schema.Types.ObjectId, ref: 'uf'}
}, {versionKey: false});


module.exports = mongoose.model('Cidade', cidadeModel);


