'use strict'

const repository = require('../repositories/cliente-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function clienteController() {

}

clienteController.prototype.post = async (req, res) => {

    let _validationContract = new validation();
    _validationContract.isRequired(req.body.codigo_cliente, 'O código é obrigatório');
    _validationContract.isRequired(req.body.codigo_usuario, 'Código de usuário é obrigatório');
    
    ctrlBase.post(_repo, _validationContract, req, res);
};

clienteController.prototype.put = async (req, res) => {

    let _validationContract = new validation();
    _validationContract.isRequired(req.body.codigo_cliente, 'o código é obrigatório');
    _validationContract.isRequired(req.body.codigo_usuario, 'Código Obrigatório');
    _validationContract.isRequired(req.params.id, 'O Id que será atualizado é obrigatório');

    ctrlBase.put(_repo, _validationContract, req, res);
};

clienteController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

clienteController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

clienteController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = clienteController;