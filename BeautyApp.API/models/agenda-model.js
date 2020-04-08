'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const agendaModel = new schema({ //definição de campos

    //titulo: { trim: true, required: true, type: String},
    codigo_agenda:{type: Number, required: true, index: true, unique: true},
    codigo_dia: {type: mongoose.Schema.Types.ObjectId, ref: 'dia'}

}, {versionKey: false});


module.exports = mongoose.model('agenda', agendaModel);


