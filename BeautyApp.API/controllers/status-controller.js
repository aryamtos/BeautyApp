'use strict'


const repository = require('../repositories/status-repository');

const ctrlBase = require('../bin/helpers/validation');
const _repo = new repository();

function statusController(){


}
statusController.prototype.post = async( req, res) =>{

    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);

};

statusController.prototype.put = async( req, res) =>{

    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
    
    };

statusController.prototype.get = async( req, res) =>{

    ctrlBase.get(_repo, req, res);
};

statusController.prototype.getById = async( req, res) =>{

    ctrlBase.getById(_repo, req, res);
};

statusController.prototype.delete = async( req, res) =>{

    ctrlBase.delete(_repo, req, res);

};

module.exports = statusController; 