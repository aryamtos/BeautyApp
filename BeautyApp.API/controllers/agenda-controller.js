'use strict'


const repository = require('../repositories/agenda-repository');

const ctrlBase = require('../bin/helpers/validation');
const _repo = new repository();

function calendarController(){


}
calendarController.prototype.post = async( req, res) =>{

    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);

};

calendarController.prototype.put = async( req, res) =>{

    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
    
    };

calendarController.prototype.get = async( req, res) =>{

    ctrlBase.get(_repo, req, res);
};

calendarController.prototype.getById = async( req, res) =>{

    ctrlBase.getById(_repo, req, res);
};

calendarController.prototype.delete = async( req, res) =>{

    ctrlBase.delete(_repo, req, res);

};

module.exports = calendarController; 