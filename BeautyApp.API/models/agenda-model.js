'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const agendaModel = new schema({ //definição de campos

  
    codigo_dia: {
        
        type: mongoose.Schema.Types.ObjectId,
         ref: 'dia'}

}, {versionKey: false});


module.exports = mongoose.model('agenda', agendaModel);


