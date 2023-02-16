const {Router} = require('express');
const {
    getAutores,
    addAutor,
    updateAutor,

    getReviewrs,
    getReviewr,
    addReviewrs,
    updateReviewrs,

    getLenguajes,
    addLenguajes,
    updateLenguajes,

    getSpecialty
    } = require('../controllers/dataController');

const dataRoute = Router();

dataRoute.get('/autores/',getAutores);
dataRoute.post('/autores/',addAutor);
dataRoute.put('/autores/:id',updateAutor);

dataRoute.get('/reviewrs/',getReviewrs);
dataRoute.get('/reviewrs/:id',getReviewr)
dataRoute.post('/reviewrs/',addReviewrs);
dataRoute.put('/reviewrs/:id',updateReviewrs);

dataRoute.get('/lenguajes/',getLenguajes);
dataRoute.post('/lenguajes/',addLenguajes);
dataRoute.put('/lenguajes/:id',updateLenguajes);

dataRoute.get('/Specialty/',getSpecialty);


module.exports = dataRoute;