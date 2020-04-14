'use strict'

const repository = require('../repositories/empreendedor-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();


//Dependência para a geração do Token
const jwt = require('jsonwebtoken');
const variables = require('../bin/configuration/variables');
const md5 = require('md5');

function empreendedorController() {

}

empreendedorController.prototype.post = async (req, res) => {

    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'O nome é obrigatório');
    _validationContract.isRequired(req.body.sobrenome, 'O sobrenome é obrigatório');
    _validationContract.isRequired(req.body.senha, ' A senha é obrigatória');
    _validationContract.isEmail(req.body.email, 'Informe o email');
    _validationContract.isRequired(req.body.tel,'Informe o número');
    
    let empreendedorIsEmailExiste  = await _repo.IsEmailExiste(req.body.email);
    if(empreendedorIsEmailExiste){
        _validationContract.isTrue((empreendedorIsEmailExiste.nome != undefined),`Já existe o e-mail ${req.body.email} cadastrado em nossa base.`)
    }
       //Criptografa a senha do  empreendedor
       req.body.senha = md5(req.body.senha);

    ctrlBase.post(_repo, _validationContract, req, res);
};

empreendedorController.prototype.put = async (req, res) => {

    let _validationContract = new validation();
    _validationContract.isRequired(req.body.nome, 'O nome é obrigatório');
    _validationContract.isRequired(req.body.sobrenome, 'O sobrenome é obrigatório');
    _validationContract.isRequired(req.body.senha, ' A senha é obrigatória');
    _validationContract.isEmail(req.body.email, 'Informe o email');
    _validationContract.isRequired(req.body.tel,'Informe o número');
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

empreendedorController.prototype.autenticar = async (req,res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.email, 'Informe seu email');
    _validationContract.isEmail(req.body.email, 'E-mail informado é inválido');
    _validationContract.isRequired(req.body.senha, 'Informe sua senha');
    if (!_validationContract.isValid()) {
        res.status(400).send({ message: 'Não foi possível efetuar o login', validation: _validationContract.errors() })
        return;
    }
    let empreendedorEncontrado = await _repo.authenticate(req.body.email, req.body.senha);
    if(empreendedorEncontrado){

        res.status(200).send({
            usuario: usuarioEncontrado,
            token: jwt.sign({ user: usuarioEncontrado }, variables.Security.secretyKey)
        })
    }
    else {
        res.status(404).send({ message: 'Usuário e senha informado são inválido!' });
    }
}

module.exports = empreendedorController;