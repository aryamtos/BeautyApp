//index = listar uma série de itens
//show =  mostrar uma única coisa
//store= criar uma sessão
//update = alterar uma sessão
//destroy = deletar uma sessão

'use strict'

const repository = require('../repositories/user-repository');
const ctrlBase = require('../bin/base/controller');
const _repo = new repository();

function usuarioController() {

}
usuarioController.prototype.post = async( req, res) =>{

    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);

};

usuarioController.prototype.put = async( req, res) =>{

    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
    
    };

usuarioController.prototype.get = async( req, res) =>{

    ctrlBase.get(_repo, req, res);
};

usuarioController.prototype.getById = async( req, res) =>{

    ctrlBase.getById(_repo, req, res);
};

usuarioController.prototype.delete = async( req, res) =>{

    ctrlBase.delete(_repo, req, res);

};

module.exports = usuarioController; 
/*const User = require('../models/user-model');

module.exports = {
    async store(req, res) { 
        
        const {nome, email,senha} = req.body;
       
        try{

            if(await User.findOne({nome, email,senha}))
            return res.status(400).send({error: 'User already exists'});

           // const user = await User.create(req.body);
           const user = await User.create({
             nome,email,senha
           })
            //user.senha = undefined;
            return res.send({user});
        }catch(err){

            return res.status(400).send({error: 'Registration failed'})

        }

    }
};


//Dependência para a geração do Token
const jwt = require('jsonwebtoken');
const variables = require('../bin/configuration/variables');
const md5 = require('md5');
const validation = require('../bin/helpers/validation');

*/