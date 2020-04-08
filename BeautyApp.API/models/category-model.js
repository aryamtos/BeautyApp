'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const categoriaModel = new schema({ //definição de campos

    titulo: { trim: true, required: true, type: String},
    codigo_categoria:{type: String, required: true, index: true, unique: true},
    foto:{type: String, required:false},
   
}, {versionKey: false});


module.exports = mongoose.model('Category', categoriaModel);


