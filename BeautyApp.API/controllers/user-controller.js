//index = listar uma série de itens
//show =  mostrar uma única coisa
//store= criar uma sessão
//update = alterar uma sessão
//destroy = deletar uma sessão

const User = require('../models/user-model');

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