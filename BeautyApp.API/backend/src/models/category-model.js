'use strict'


const mongoose = require('mongoose'); //importamos o mongoose
const schema = mongoose.Schema; // importamos o schema


const categoriaModel = new schema({ //definição de campos

    
    foto:{
        type: String,
         required:false,
    },
    
    /*tipos:  [String],*/
    dias: {type: String, required: true},//dias em que o serviço está disponivel
    horario:{},//horarios para atendimento
    title: {type: String, required: true},//nome do serviço
    categoriaServico:{ type : String, required: true},//esse é a categoria do serviço
    description:{type:String, required: true},
    price:{
        type: String,
    },
    when:{ type: Date, required:true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    endereco:{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Endereco',
    },
    createdAt:{
        type: Date,
        default: Date.now(),

    },
},{
    toJSON:{
        virtuals:true,
    },
});

categoriaModel.virtual('foto_url').get(function(){
    return `http://192.168.1.106:3000/files/${this.foto}`;
});



module.exports = mongoose.model('Category', categoriaModel);


