require('../models/dia-model');


const mongoose = require('mongoose');
const diaModel = mongoose.model('dia');

class diaRepository{

    constructor(){

    }
    async create(data){

        let dia  = new diaModel(data);
        let resultado = await dia.save();
        return resultado;
 
    }

    async update(id, data){

        await diaModel.findByIdAndUpdate(id,{ $set: data});
        let resultado = await diaModel.findById(id);
        return resultado;

    }

    async getAll(){

        return await diaModel.find();
    }
    async getById(id){

        return await diaModel.findById(id);

    }
    async delete(id){
        
        return await diaModel.findByIdAndRemove(id);
    }
}

module.exports = diaRepository;