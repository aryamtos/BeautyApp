'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const enderecoModel = new schema({ //definição de campos

 
    logradouro: {
        type:String,
        trim: true
    },
    numero:{
        type:Number
    },
    bairro:{
        type:mongoose.Schema.Types.ObjectId,
         ref: 'bairro'
    },

}, {versionKey: false});


module.exports = mongoose.model('endereco', enderecoModel);


