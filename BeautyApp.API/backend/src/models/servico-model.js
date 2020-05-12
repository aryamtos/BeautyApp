'use strict'

const mongoose = require('mongoose');

const servicoSchema = new mongoose.Schema({

    nome:{

        type: String,
        required: true,
        trim: true
    },
    preco:{
        type: Number
    },
    thumbnail:{
            type: String
    },
    categoria:{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategoriaModel'
    },
    createdAt:{
        type: Date,
        default: Date.now,

    }
});

servicoSchema.virtual('foto_url').get(function(){
    return `http://192.168.1.106:3000/files/${this.foto}`;
});
module.exports = mongoose.model('servico',servicoSchema);