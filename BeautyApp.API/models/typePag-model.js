'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tipoPagamento = new schema({

    tipo_pagamento: [String]

}, {versionKey: false});

module.exports = mongoose.model('tipoPagamento', tipoPagamento);