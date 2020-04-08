'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;



const servicoModel = new schema({

    codigo_servico:{type:String, index: true, required:true},
    nome_servico: {type: String, required:true},
    preco:{type:Number},
    codigo_servico_localizacao:{type: mongoose.Schema.Types.ObjectId, ref:'localizacao'},
    codigo_servico_agenda:{ type:  mongoose.Schema.Types.ObjectId, ref:'agenda'},
    codigo_servico_pagamento:{type: mongoose.Schema.Types.ObjectId, ref:'pagamento'},
    codigo_cliente:{ type:  mongoose.Schema.Types.ObjectId, ref:'cliente'},
}, {versionKey:false});

module.exports = mongoose.model('servico', servicoModel);