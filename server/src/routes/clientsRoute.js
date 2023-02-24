const {Router} = require('express');
const {
    addClients
    } = require('../controllers/clientsController');

const {
    uploadInfo
    } = require('../controllers/uploadFromClient');

const clientsRoute = Router();


clientsRoute.post('/:uid',addClients);
clientsRoute.post('/Upload', uploadInfo) 


module.exports = clientsRoute;