'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;


const localizacaoModel = new schema({
        
    endereco:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'endereco'
    },
    
}, {versionKey: false});

module.exports = mongoose.model('localizacao', localizacaoModel);