'use strict'

const repository = require('../repositories/horario-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();

function horarioController(){

}

horarioController.prototype.post = async( req, res) =>{

    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);

};

horarioController.prototype.put = async( req, res) =>{

    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
    
    };

horarioController.prototype.get = async( req, res) =>{

    ctrlBase.get(_repo, req, res);
};

horarioController.prototype.getById = async( req, res) =>{

    ctrlBase.getById(_repo, req, res);
};

horarioController.prototype.delete = async( req, res) =>{

    ctrlBase.delete(_repo, req, res);

};

module.exports = horarioController; 