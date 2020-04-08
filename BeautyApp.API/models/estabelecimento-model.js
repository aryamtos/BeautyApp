'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const estabelecimentoModel = new schema({ //definição de campos

    codigo_estabelecimento: { type: Number, index: true,required: true, unique: true},
    nome_estabelecimento    : {type: String, required: true, trim: true},
    codigo_endereco: {type: mongoose.Schema.Types.ObjectId, ref: 'endereco'},
    codigo_empreed:{type: mongoose.Schema.Types.ObjectId, ref: 'Empreendedor'},
    dataCriacao:{type: Date, default: Date.now}
}, {versionKey: false});


estabelecimentoModel.pre('save', next =>{

    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
    next();
})

module.exports = mongoose.model('Estabelecimento', estabelecimentoModel);


