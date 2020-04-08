'use strict'

const repository = require('../repositories/empreendedor-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function empreendedorController() {

}

empreendedorController.prototype.post = async (req, res) => {

    let _validationContract = new validation();
    _validationContract.isRequired(req.body.codigo_empreendedor, 'O código é obrigatório');
    _validationContract.isRequired(req.body.nome, 'O nome é obrigatório');
    _validationContract.isRequired(req.body.sobrenome, 'O sobrenome é obrigatório');
     _validationContract.isRequired(req.body.codigo_servico, 'Código de servico é obrigatório');
    
    ctrlBase.post(_repo, _validationContract, req, res);
};

empreendedorController.prototype.put = async (req, res) => {

    let _validationContract = new validation();
    _validationContract.isRequired(req.body.codigo_empreendedor, 'O código é obrigatório');
    _validationContract.isRequired(req.body.nome, 'O nome é obrigatório');
    _validationContract.isRequired(req.body.sobrenome, 'O sobrenome é obrigatório');
    _validationContract.isRequired(req.body.codigo_servico, 'Código de servico é obrigatório');
    _validationContract.isRequired(req.params.id, 'O Id que será atualizado é obrigatório');

    ctrlBase.put(_repo, _validationContract, req, res);
};

empreendedorController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

empreendedorController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

empreendedorController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = empreendedorController;