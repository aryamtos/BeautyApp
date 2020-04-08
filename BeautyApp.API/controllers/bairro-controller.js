'use strict'


const repository = require('../repositories/bairro-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();

function bairroController(){

}

bairroController.prototype.post = async( req, res) =>{

    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);

};

bairroController.prototype.put = async( req, res) =>{

    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
    
    };

bairroController.prototype.get = async( req, res) =>{

    ctrlBase.get(_repo, req, res);
};

bairroController.prototype.getById = async( req, res) =>{

    ctrlBase.getById(_repo, req, res);
};

bairroController.prototype.delete = async( req, res) =>{

    ctrlBase.delete(_repo, req, res);

};

module.exports = bairroController; 