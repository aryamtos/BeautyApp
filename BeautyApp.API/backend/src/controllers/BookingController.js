const Booking = require('../models/Booking');
module.exports ={

    async store(req, res){

        const{user_id} = req.headers;
        const{category_id} = req.params;
        const{date} = req.body;

        const booking = await Booking.create({

            user:user_id,
            category: category_id,
            date,

        });

        await booking.populate('category').populate('user').execPopulate();

        return res.json(booking); 

    }

};