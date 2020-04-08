'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const horarioModel = new schema({ //definição de campos

    codigo_horario: { type: Number, index: true,required: true, unique: true},
    //horario:{type}
    codigo_status:{ type:mongoose.Schema.Types.ObjectId, ref: 'status'},
    dataCriacao:{type: Date, default: Date.now}
}, {versionKey: false});


horarioModel.pre('save', next =>{

    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
    next();
})

module.exports = mongoose.model('horario', horarioModel);


