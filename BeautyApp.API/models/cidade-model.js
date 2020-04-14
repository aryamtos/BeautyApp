'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const cidadeModel = new schema({ //definição de campos

    nome_cidade: { 

        trim: true, 
        required: true, 
        type: String
    },
    cep:{
        type: String, 
        required: true, 
        index: true, 
    
    },
    codigo_uf:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'uf'
    }
}, {versionKey: false});


module.exports = mongoose.model('Cidade', cidadeModel);


