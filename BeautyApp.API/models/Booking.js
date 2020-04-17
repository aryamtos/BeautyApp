const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({


    date: String,
    approved:Boolean,
    user:{

        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'

    }
});


module.exports = mongoose.model('Booking', BookingSchema);