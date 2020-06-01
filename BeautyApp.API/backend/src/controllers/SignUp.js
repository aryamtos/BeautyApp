'use strict'

const repository = require('../controllers/');
const validation = require('../config/helpers/validation');
const ctrlBase = require('../config/base/controller-base');
const _repo = new repository();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const variables = require('../config/variables');


function userController() {

}

userController.prototype.post = async (req, res) => {

    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'Informe seu nome');
    _validationContract.isRequired(req.body.email, 'Informe seu e-mail');
    _validationContract.isEmail(req.body.email, 'O e-mail informado é inválido');
    _validationContract.isRequired(req.body.senha, 'A senha informada é obrigatória');
    _validationContract.isRequired(req.body.senhaConfirmacao, 'A senha de confirmação é obrigatória');
    _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao, 'A Senha e a Confirmação não são iguais');

    let usuarioIsEmailExiste = await _repo.IsEmailExiste(req.body.email);
    if (usuarioIsEmailExiste) {
        _validationContract.isTrue((usuarioIsEmailExiste.nome != undefined), `Já existe o e-mail ${req.body.email} cadastrado em nossa base.`);
    }

    //Criptografa a senha do usuário
    req.body.senha = md5(req.body.senha);

    ctrlBase.post(_repo, _validationContract, req, res);
};

userController.prototype.put = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'Informe seu nome');
    _validationContract.isRequired(req.body.email, 'Informe seu e-mail');
    _validationContract.isEmail(req.body.email, 'O e-mail informado é inválido');
    _validationContract.isRequired(req.params.id, 'Informe o Id do usuário que será editado');

    let usuarioIsEmailExiste = await _repo.IsEmailExiste(req.body.email);
    if (usuarioIsEmailExiste) {
        _validationContract.isTrue(
            (usuarioIsEmailExiste.nome != undefined) &&
            (usuarioIsEmailExiste._id != req.params.id),
            `Já existe o e-mail ${req.body.email} cadastrado em nossa base.`);
    }
    ctrlBase.put(_repo, _validationContract, req, res);
};

userController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

userController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

userController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

userController.prototype.authentification= async(req, res) =>{
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.email, 'Informe seu e-mail');
    _validationContract.isEmail(req.body.email, 'O e-mail informado é inválido');
    _validationContract.isRequired(req.body.senha, 'Informe sua senha');

    if (!_validationContract) {
        res.status(400).send({messsage: "Não foi possível efetuar o login", validation: _validationContract.errors()});
    }
    
    let userFounded = await _repo.authenticate(req.body.email, req.body.senha);
    if (userFounded) {
        res.status(200).send({
            user: userFounded,
            token: jwt.sign(userFounded, variables.Security.secretKey)
        })
    }else{
        res.status(404).send({message: "Usuário e senha informado estão inválidos"});
    }
};

module.exports = userController;