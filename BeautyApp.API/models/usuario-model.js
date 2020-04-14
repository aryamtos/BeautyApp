'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const usuarioModel = new schema({ //definição de campos


    nome    : {type: String, required: true, index:true, trim: true},
    sobrenome: {type: String, required: true, trim: true},
    email:{type: String},
    senha:{type: String,required: true},
    dataCriacao:{type: Date, default: Date.now}
}, {versionKey: false});


usuarioModel.pre('save', next =>{

    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
    next();
})

module.exports = mongoose.model('Usuario', usuarioModel);


