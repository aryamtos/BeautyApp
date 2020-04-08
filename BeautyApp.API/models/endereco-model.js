'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const enderecoModel = new schema({ //definição de campos

 
    codigo_endereco:{type: Number, required: true, index: true, unique: true},
    logradouro: {type:String},
    numero:{type:Number},
    codigo_bairro:{type:mongoose.Schema.Types.ObjectId, ref: 'bairro'}
}, {versionKey: false});


module.exports = mongoose.model('endereco', enderecoModel);


