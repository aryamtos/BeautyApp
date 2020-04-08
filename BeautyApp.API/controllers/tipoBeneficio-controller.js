'use strict'

const repository = require('../repositories/tipoBeneficio-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function tipoBeneficioController() {

}

tipoBeneficioController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body. codigo_tipoBeneficio, 'Código obrigatorio');
    _validationContract.isRequired(req.body. nome_tipo_beneficio, 'O nome do benefício é obrigatório');
    _validationContract.isRequired(req.body.valor, 'O preço do tipoBeneficio é obrigatorio');

    if (req.body.valor)
        _validationContract.isTrue(req.body.valor == 0, 'O preço do tipoBeneficio deve ser maior que Zero.');

    ctrlBase.post(_repo, _validationContract, req, res);
};

tipoBeneficioController.prototype.put = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body. codigo_tipoBeneficio, 'Código obrigatorio');
    _validationContract.isRequired(req.body. nome_tipo_beneficio, 'O nome do benefício é obrigatório');
    _validationContract.isRequired(req.body.valor, 'O preço do tipoBeneficio é obrigatorio');

    if (req.body.valor)
        _validationContract.isTrue(req.body.valor == 0, 'O preço do tipoBeneficio deve ser maior que Zero.');

    ctrlBase.put(_repo, _validationContract, req, res);
};

tipoBeneficioController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

tipoBeneficioController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

tipoBeneficioController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = tipoBeneficioController;
