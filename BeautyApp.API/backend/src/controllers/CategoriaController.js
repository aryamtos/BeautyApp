
const CategoriaModel = require('../models/Categoria'); //Spot
const User = require('../models/user-model');
const { isPast } = require('date-fns');

module.exports = {

    async index(req, res) {

        const { title } = req.query;
        const categorias = await CategoriaModel.find({ title: title }); //encontrar vários tipos

        return res.json(categorias);
    },
    async store(req, res) {

        const { filename } = req.file;
        const { dias, title, categoriaServico, description, when, price } = req.body;
        const { user_id } = req.headers;


        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'tipo é obrigatório' });

        }
        else if (!title) {
            return res.status(400).json({ error: 'tipo é obrigatório' });

        }
        else
        {
            
        const categoriactrl = await CategoriaModel.create({

            foto: filename,
            //nomes: nomes.split(',').map(nome => nome.trim()),
            dias: dias,
            title: title,
            categoriaServico: categoriaServico,
            description: description,
            price: price,
            when: when,
            user: user_id
        })
        return res.json(categoriactrl);//spot


        }
    },
    async update(req, res) {

        await CategoriaModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }
};