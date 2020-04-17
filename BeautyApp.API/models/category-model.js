'use strict'


const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const categoriaModel = new schema({ //definição de campos

    
    foto:{
        type: String,
         required:false,
    },
    tipos:  [String],

    price:{
        type: Number,
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

     
    createdAt:{
        type: Date,
        default: Date.now,

    },
},{
    toJSON:{
        virtuals:true,
    },
});

categoriaModel.virtual('foto_url').get(function(){
    return `http://localhost:3000/files/${this.foto}`
})


module.exports = mongoose.model('Category', categoriaModel);


