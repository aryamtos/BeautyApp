const express = require('express');
const multer = require('multer');
const uploadConfig = require('./bin/upload');
const categoryConfig = require('./bin/categoryUpload');
const userController = require('./controllers/user-controller');
//const userValidation = require('./middlewares/auth');
//const categoryController = require('./controllers/category-controller');


const servicoController = require('./controllers/ServicoController');
const categoriaController = require('./controllers/CategoriaController');
const dashboardController = require('./controllers/DashboardController');
const bookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');
const enderecoController = require('./controllers/enderecoController');
const localidadeController =require('./controllers/LocalidadeController');

const routes = express.Router();
const upload = multer(uploadConfig);
const catUpload = multer(categoryConfig);



routes.post('/User', userController.store); //SessionController
//routes.post('/User/Authenticate',userController.authenticate);
//routes.get('/me',userValidation, userController.get);

//routes.get('/Category', categoryController.index);
//routes.post('/Category',upload.single('foto'),categoryController.store); //SpotController
routes.get('/CategoriaModel', categoriaController.index);
routes.get('/CategoriaModel', categoriaController.listServico );
//routes.get('/Servico', servicoController.index);
routes.get('/CategoriaModel/:id', categoriaController.show);
//routes.get('/Servico/:id', servicoController.show);



//routes.get('/filter/year/:user', categoriaController.year);
//routes.get('/filter/month/:user', categoriaController.month);
//routes.get('/filter/week/:user', categoriaController.week);
//routes.get('/filter/today/:user', categoriaController.today);

routes.get('/filter/all/:user',categoriaController.all);
routes.delete('/filter/:id', categoriaController.delete);


//routes.post('/Servico', upload.single('thumbnail'),servicoController.store);
routes.post('/CategoriaModel',upload.single('foto'),categoriaController.store); //SpotController
routes.put('/CategoriaModel/:id', categoriaController.update);

routes.post('/Estabelecimento',localidadeController.store); //estabelecimento
routes.post('/EnderecoModel',enderecoController.store);
routes.get('/dashboard', dashboardController.show);
routes.post('/CategoriaModel/:category_id/bookings', bookingController.store);
//routes.post('/bookings:)
routes.get('/bookings',bookingController.show);
routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
//aprovar solictação de reserva
routes.post('/bookings/:booking_id/rejections', RejectionController.store);



module.exports = routes;