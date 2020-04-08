'use strict'

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const tipoBeneficioModel = new schema({

    codigo_tipoBeneficio:{type: String, index: true, required: true},
    nome_tipo_beneficio:{type: String, required:true},
    valor: {type:Number }

}, { versionKey:false});

module.exports = mongoose.model('tipo_beneficio',tipoBeneficioModel);