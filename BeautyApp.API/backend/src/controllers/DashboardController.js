const Category = require('../models/category-model');

module.exports = {

    async show(req,res){
        
        const {user_id} = req.headers;

        const categories = await Category.find({user: user_id});

        return res.json(categories);
    }
};