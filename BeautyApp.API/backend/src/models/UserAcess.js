'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const UserAcess = new schema({


    nome    : {type: String, required: true, trim: true},
    cpf:{type:Number, required:true},
    telefone:{type:Number},
    email:{type: String,unique:true,  required:true, lowercase:true},
    dataCriacao: { type: Date, default: Date.now },
    senha:{type:String, required: true},
}, {versionKey: false});

UserAcess.pre('save', next =>{

    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
    next();
})

module.exports = mongoose.model('UserSignUp', UserAcess);

