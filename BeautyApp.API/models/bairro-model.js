'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const bairroModel = new schema({ //definição de campos

   
    nome_bairro    : {

        type: String,
         required: true, 
         index:true,
         trim: true
        
        },
    cep: {
        
        type: String, 
        unique:true
    
    },
    cidade:{

        type: mongoose.Schema.Types.ObjectId,
         ref: 'Cidade'
        
        },
    dataCriacao:{type: Date, default: Date.now}
}, {versionKey: false});


bairroModel.pre('save', next =>{

    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
    next();
})

module.exports = mongoose.model('bairro', bairroModel);


