const User = require('../models/user-model');


module.exports = {


    async store(req,res){

        const{ nome, email, senha, senhaConfirmacao} = req.body;

        const user = await User.create({

            nome: nome,
            email: email,
            senha: senha,
            senhaConfirmacao: senhaConfirmacao
        })

        return res.json(user);
    }


};