'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pagamentoModel = new schema({

    codigo_pagamento:{type: Number, required: true, unique: true},
    nome_pagamento:{ type: String},
    codigo_beneficio:{type:mongoose.Schema.Types.ObjectId, ref:'beneficio'}
},{versionKey: false});

module.exports = mongoose.model('pagamento',pagamentoModel);
