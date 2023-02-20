const {Router} = require('express');
const {
    addClients
    } = require('../controllers/clientsController');

const clientsRoute = Router();


clientsRoute.post('/',addClients);


module.exports = clientsRoute;