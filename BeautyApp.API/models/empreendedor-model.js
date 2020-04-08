'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;


const empreendedorModel = new schema({

    codigo_empreendedor:{type: Number, required: true, unique: true},
    codigo_categoria:{type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    codigo_servico:{type: mongoose.Schema.Types.ObjectId, ref: 'servico'},
    codigo_user:{type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'}

}, { versionKey: false});


module.exports = mongoose.model('Empreendedor', empreendedorModel);