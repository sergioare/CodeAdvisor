const {Router} = require('express');
const { addMyCart } = require('../controllers/MyCart/addMyCart');
const { getMyCart } = require('../controllers/MyCart/getMyCart');
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
clientsRoute.post('/MyCart/:uid', addMyCart) 
clientsRoute.get('/MyCart/:uid', getMyCart )

module.exports = clientsRoute;