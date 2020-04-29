const User = require('../models/user-model');


module.exports = {

    async store(req,res){

        //const{ email, senha} = req.body;
        const{ email} = req.body;
        
        let user = await User.findOne({ email});
        
        if(!user){
           // user = await User.create({email,senha});
           user = await User.create({email});
        }

        return res.json(user);
    }
};