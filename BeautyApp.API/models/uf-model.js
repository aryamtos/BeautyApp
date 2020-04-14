'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const ufModel = new schema({ //definição de campos

    nome_uf: { trim: true, required: true, type: String},
    codigo_uf:{type: Number, required: true, index: true, unique: true},
    sigla: {type:String},
    codigo_pais:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Pais'
    }

}, {versionKey: false});


module.exports = mongoose.model('uf', ufModel);


