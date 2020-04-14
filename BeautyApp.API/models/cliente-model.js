'use strict'

const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema
const now = new Date();


const clienteModel = new schema({ //definição de campos

    nome:{


        type: String,
         trim:true,
         index:true
    },
    sobrenome:{

        type:String,
        
    },
    tel:{

        type: Number
    },
    email:{
        type: String
    },
    senha:{

        type: String
    },
    localizacao:{

        type:
            mongoose.Schema.Types.ObjectId, 

            ref:'endereco'

        
    },
    sexo:{
        type: String
    },
    dataNascimento:{

            type: String,
            
     },
     user:{
          type: mongoose.Schema.Types.ObjectId,
          ref:'Usuario'
    },

    dataCriacao:{type: Date, default: Date.now}
}, {versionKey: false});



clienteModel.pre('save', next =>{

    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
    next();
})


module.exports = mongoose.model('cliente', clienteModel);


