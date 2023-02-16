const {Router} = require('express');
const {
    addData,
    getAllData,
    getAutores,
    updateAutor
    } = require('../controllers/dataController');

const dataRoute = Router();

dataRoute.get('/', getAllData)
dataRoute.get('/autores/',getAutores);
dataRoute.post('/autores/:id',updateAutor);
dataRoute.post('/', addData)

module.exports = dataRoute;