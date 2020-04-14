'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;


const paisModel = new schema({

    
    nome_pais:{type:String},
    
}, { versionKey: false});


module.exports = mongoose.model('Pais', paisModel);