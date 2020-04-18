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
    foto:{
            type: String
    },
    categoria:{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    createdAt:{
        type: Date,
        default: Date.now,

    }
});

module.exports = mongoose.model('servico',servicoSchema);