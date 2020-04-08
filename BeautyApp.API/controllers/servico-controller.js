'use strict'

const repository = require('../repositories/servico-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function servicoController() {

}

servicoController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.codigo_servico, 'O código do serviço é obrigatório');
    _validationContract.isRequired(req.body.nome_servico, 'O nome do serviço  é obrigatoria');
    _validationContract.isRequired(req.body.preco, 'Informe o preço do servico');
    _validationContract.isRequired(req.body.codigo_localizacao, 'Informe a localizacao do servico');

    if (req.body.preco)
        _validationContract.isTrue(req.body.preco == 0, 'O preço do servico deve ser maior que Zero.');

    ctrlBase.post(_repo, _validationContract, req, res);
};

servicoController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.codigo_servico, 'O código do serviço é obrigatório');
    _validationContract.isRequired(req.body.nome_servico, 'O nome do serviço  é obrigatoria');
    _validationContract.isRequired(req.body.preco, 'Informe o preço do servico');
    _validationContract.isRequired(req.body.codigo_localizacao, 'Informe a localizacao do servico');


    if (req.body.preco)
        _validationContract.isTrue(req.body.preco == 0, 'O preço do servico deve ser maior que Zero.');

    ctrlBase.put(_repo, _validationContract, req, res);
};

servicoController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

servicoController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

servicoController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = servicoController;
