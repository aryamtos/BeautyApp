'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;


const paisModel = new schema({

    codigo_pais:{type: Number, required: true, unique: true},
    nome_pais:{type:String}
}, { versionKey: false});


module.exports = mongoose.model('Pais', paisModel);