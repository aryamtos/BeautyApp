'use strict'

const repository = require('../repositories/estabelecimento-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function estabelecimentoController() {

}

estabelecimentoController.prototype.post = async (req, res) => {

    let _validationContract = new validation();
    _validationContract.isRequired(req.body.codigo_estabelecimento, 'o código é obrigatório');
    _validationContract.isRequired(req.body.nome_estabelecimento, 'O nome do estabelecimento é obrigatória');

    ctrlBase.post(_repo, _validationContract, req, res);
};

estabelecimentoController.prototype.put = async (req, res) => {

    let _validationContract = new validation();
    _validationContract.isRequired(req.body.codigo_estabelecimento, 'O código é obrigatório');
    _validationContract.isRequired(req.body.nome_estabelecimento, 'O nome é obrigatória');
    _validationContract.isRequired(req.params.id, 'O Id que será atualizado é obrigatório');

    ctrlBase.put(_repo, _validationContract, req, res);
};

estabelecimentoController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

estabelecimentoController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

estabelecimentoController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = estabelecimentoController;