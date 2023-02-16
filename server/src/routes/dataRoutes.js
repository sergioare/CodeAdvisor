const {Router} = require('express');
const {
    getAutores,
    addAutor,
    updateAutor,

    getReviewrs,
    addReviewrs,
    updateReviewrs
    } = require('../controllers/dataController');

const dataRoute = Router();

dataRoute.get('/autores/',getAutores);
dataRoute.post('/autores/',addAutor);
dataRoute.put('/autores/:id',updateAutor);

dataRoute.get('/reviewrs/',getReviewrs);
dataRoute.post('/reviewrs/',addReviewrs);
dataRoute.put('/reviewrs/:id',updateReviewrs);


module.exports = dataRoute;