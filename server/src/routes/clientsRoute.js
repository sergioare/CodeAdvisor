const {Router} = require('express');
const {
    addClients,
    addClientParams
    } = require('../controllers/clientsController');

const {
    uploadInfo
    } = require('../controllers/uploadFromClient');

const clientsRoute = Router();


clientsRoute.post('/:uid',addClients);
clientsRoute.put('/:uid', addClientParams)
clientsRoute.post('/Upload', uploadInfo) 


module.exports = clientsRoute;