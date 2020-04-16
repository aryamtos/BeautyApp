const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./router');

const app = express();

mongoose.connect('mongodb+srv://Beauty:@r1adn3123@cluster0-k2kw0.mongodb.net/test?retryWrites=true&w=majority',{

    useNewUrlParser:true,
    useUnifiedTopology:true,
})
app.use(cors());
app.use(express.json());
app.use(routes);

//local host
app.listen(3000);