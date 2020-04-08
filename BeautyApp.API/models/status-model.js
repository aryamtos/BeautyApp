'use strict'

const mongoose = require('mongoose');

const schema = mongoose.Schema;


const statusModel = new schema({

    codigo_status:{type: Number, index: true, required: true, unique:true},
    nome_status:{type: String}

}, {versionKey: false});



module.exports = mongoose.model('status',statusModel);