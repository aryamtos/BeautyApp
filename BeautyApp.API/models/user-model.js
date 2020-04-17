
const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({

   nome:{

        type: String,
        required: true,
    },
    email:{
        type:String,
        unique: true,
        required: true,
        lowercase: true,
    } ,
    senha: {
        type:String,
        required: true,
        select: false,
    },
    senhaConfirmacao:{

        type: String,
        required: true,
        select: false,
    },
   
    createdAt:{
        type: Date,
        default: Date.now,

    }
});

userSchema.pre('save', async function(next){

    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
    this.senhaConfirmacao = hash;

    next();
});


module.exports = mongoose.model('User', userSchema);