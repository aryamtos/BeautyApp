'use strict'

const mongoose = require('mongoose');

const schema = mongoose.Schema;


const statusModel = new schema({

   
    nome_status:{type: String}

}, {versionKey: false});



module.exports = mongoose.model('status',statusModel);