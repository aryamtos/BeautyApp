const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) =>{

    let token = req.body.token || req.query.query || req.headers['x-acess-token'];

    if(token){

    }else{

        res.status(401).send({ message: 'Você precisa informar um token para acessar esse recurso'});
        return;
    }
}