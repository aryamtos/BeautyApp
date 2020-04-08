'use strict'

const mongoose = require('mongoose');

const schema = mongoose.Schema;


const diaModel = new schema({

    codigo_dia:{
        type: Number,
        index: true,
        required:true,
        unique: true
    },
    nome_dia:{
        type: String,
        trim: true,
        required: true
    },
    codigo_dia_horario:{

        type: mongoose.Schema.Types.ObjectId,
        ref:'horario'
    }
}, {versionKey: false});

module.exports = mongoose.model('dia', diaModel);
