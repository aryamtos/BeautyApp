'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const bairroModel = new schema({ //definição de campos

    codigo_bairro: { type: Number, index: true,required: true, unique: true},
    nome_bairro    : {type: String, required: true, trim: true},
    cep: {type: String, unique:true},
    codigo_cidade:{type: mongoose.Schema.Types.ObjectId, ref: 'Cidade'},
    dataCriacao:{type: Date, default: Date.now}
}, {versionKey: false});


bairroModel.pre('save', next =>{

    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
    next();
})

module.exports = mongoose.model('bairro', bairroModel);


