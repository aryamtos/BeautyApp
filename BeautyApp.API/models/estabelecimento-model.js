'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const estabelecimentoModel = new schema({ //definição de campos


    nome_estabelecimento : {
        type: String, 
        required: true, 
        trim: true
    },
    empreendedor:{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empreendedor'
    },

    endereco:{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'endereco'
    }
    
}, {versionKey: false});


module.exports = mongoose.model('Estabelecimento', estabelecimentoModel);


