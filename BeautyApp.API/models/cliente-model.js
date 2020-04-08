'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema
const now = new Date();


const clienteModel = new schema({ //definição de campos

    codigo_cliente: { type: Number, index: true,required: true, unique: true},
    dataNascimento:{ 
            type: Date,default: Date.now
     },
    codigo_usuario:{ type: mongoose.Schema.Types.ObjectId,ref:'Usuario'},
    dataCriacao:{type: Date, default: Date.now}
}, {versionKey: false});



clienteModel.pre('save', next =>{

    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
    next();
})


module.exports = mongoose.model('cliente', clienteModel);


