const Booking = require('../models/Booking');
module.exports ={

    async store(req, res){

        const{user_id} = req.headers;
        const{category_id} = req.params;//spot_id
        const{date} = req.body;

        const booking = await Booking.create({

            user:user_id,
            category: category_id,
            date,

        });

        await booking.populate('category').populate('user').execPopulate();

        const ownerSocket = req.connectedUsers[booking.category.user];

        if(ownerSocket){
            req.io.to(ownerSocket).emit('booking_request',booking)
        }

        return res.json(booking); 

    }

};