'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;


const empreendedorModel = new schema({

    nome:{type: String, required:true, trim: true},
    sobrenome:{type:String, required:true, trim: true},
    senha:{type: String},
    categoria:{ type:mongoose.Schema.Types.ObjectId, ref:'Category'},
    tel:{
        type: String
    },
    nome_empresa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estabelecimento'
    }
}, { versionKey: false});


module.exports = mongoose.model('Empreendedor', empreendedorModel);