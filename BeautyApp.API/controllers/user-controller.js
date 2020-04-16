//index = listar uma série de itens
//show =  mostrar uma única coisa
//store= criar uma sessão
//update = alterar uma sessão
//destroy = deletar uma sessão

const User = require('../models/user-model');

module.exports = {
    async store(req, res) { 
        const { email } = req.body;

        let user = await User.findOne({ email});

        if(!user){
            user = await User.create({ email });
        }

        // const user = await User.create({ email });

        return res.json(user);
    }
};