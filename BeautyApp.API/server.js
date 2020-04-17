//importando 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const path = require('path');

const routes = require('./routers');

//importando o express
const app = express();

mongoose.connect('mongodb+srv://Beauty:@r1adn3123@cluster0-k2kw0.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

//local host
app.listen(3000);