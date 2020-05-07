const express = require('express');
const multer = require('multer');
const uploadConfig = require('./bin/upload');
const userController = require('./controllers/user-controller');
const categoryController = require('./controllers/category-controller');
const dashboardController = require('./controllers/DashboardController');
const bookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');
const routes = express.Router();
const upload = multer(uploadConfig);



routes.post('/User', userController.store); //SessionController
routes.get('/Category', categoryController.index);
routes.post('/Category',upload.single('foto'),categoryController.store); //SpotController
routes.get('/dashboard', dashboardController.show);
routes.post('/Category/:category_id/bookings', bookingController.store);
routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);


module.exports = routes;