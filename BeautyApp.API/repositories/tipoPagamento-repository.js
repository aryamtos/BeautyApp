require('../models/typePag-model');

const base =require('../bin/base/repository-base');

class tipoPagamentoRepository{

    constructor(){

        this._base = new base('tipoPagamento');

    }
    async create(data){

        return await this._base.create(data);
        
    }

    async update(id, data){

        return await this._base.update(id, data);

    }

    async getAll(){

        return await this._base.getAll();
    }
    async getById(id){

        return awtipoPagamentois._base.getById(id);

    }
    async delete(id){
        
        return await this._base.delete(id);
    }
}

module.exports = tipoPagamentoRepository;