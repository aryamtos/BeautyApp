//index = listar uma série de itens
//show =  mostrar uma única coisa
//store= criar uma sessão
//update = alterar uma sessão
//destroy = deletar uma sessão

'use strict'


const repository = require('../repositories/login-repository');

const ctrlBase = require('../bin/helpers/validation');
const _repo = new repository();

function loginController(){


}
loginController.prototype.post = async( req, res) =>{

    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);

};

loginController.prototype.put = async( req, res) =>{

    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
    
    };

loginController.prototype.get = async( req, res) =>{

    ctrlBase.get(_repo, req, res);
};

loginController.prototype.getById = async( req, res) =>{

    ctrlBase.getById(_repo, req, res);
};

loginController.prototype.delete = async( req, res) =>{

    ctrlBase.delete(_repo, req, res);

};

module.exports = loginController; 