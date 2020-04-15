'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const usuarioModel = new schema({ //definição de campos


    //nome : {type: String, required: true, index:true, trim: true},
    //sobrenome: {type: String, required: true, trim: true},

    email:{type: String, unique: true}
    //senha:{type: String,required: true},
   
}, {versionKey: false});


module.exports = mongoose.model('Usuario', usuarioModel);


