'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pagamentoModel = new schema({


    tipo_pagamento:{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'tipoPagamento'
    },
    codigo_beneficio:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'beneficio'
    }
},{versionKey: false});

module.exports = mongoose.model('pagamento',pagamentoModel);
