'use strict'


const repository = require('../repositories/estabelecimento-repository');

const ctrlBase = require('../bin/helpers/validation');
const _repo = new repository();

function estabelecimentoController(){


}
estabelecimentoController.prototype.post = async( req, res) =>{

    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);

};

estabelecimentoController.prototype.put = async( req, res) =>{

    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
    
    };

estabelecimentoController.prototype.get = async( req, res) =>{

    ctrlBase.get(_repo, req, res);
};

estabelecimentoController.prototype.getById = async( req, res) =>{

    ctrlBase.getById(_repo, req, res);
};

estabelecimentoController.prototype.delete = async( req, res) =>{

    ctrlBase.delete(_repo, req, res);

};

module.exports = estabelecimentoController; 