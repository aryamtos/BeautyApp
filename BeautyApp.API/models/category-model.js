'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const categoriaModel = new schema({ //definição de campos

    titulo: { trim: true, required: true, type: String},
    codigo_categoria:{type: Number, required: true, index: true, unique: true}

}, {versionKey: false});


module.exports = mongoose.model('Category', categoriaModel);


