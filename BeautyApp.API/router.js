const express = require('express');

const userController = require('./controllers/user-controller');


const routes = express.Router();


routes.post('/User', userController.store);

module.exports = routes;