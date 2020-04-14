'use strict'

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const tipoBeneficioModel = new schema({


    nome_tipo_beneficio:{
        type: String, 
        required:true
    },
    valor: {type:Number }

}, { versionKey:false});

module.exports = mongoose.model('tipo_beneficio',tipoBeneficioModel);