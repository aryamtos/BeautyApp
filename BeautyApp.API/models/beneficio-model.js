'use strict'


const mongoose = require('mongoose');
const schema = mongoose.Schema;

const beneficioModel = new schema({

    codigo_beneficio:{ type:Number, required:true, unique:true },
    codigo_tipo_beneficio:{type:mongoose.Schema.Types.ObjectId, ref:'tipo_beneficio'}

}, {versionKey:false});


module.exports = mongoose.model('beneficio', beneficioModel);