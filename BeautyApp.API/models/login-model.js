'use script'


const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema
const now = new Date();


const loginModel = new schema({ //definição de campos

  
    email:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    },
    senha:{

        type: String
    },


}, {versionKey: false});



module.exports = mongoose.model('login', loginModel);


