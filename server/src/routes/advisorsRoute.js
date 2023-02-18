const {Router} = require('express');
const {

    getAllUAdvisors,
    getIdAdvisors,
    getAdvisorsAllReviews,

    addAdvisors,
    addAdvisorsReviews,

    updatAdvisors,
    updatAdvisorsReviews,
    
    deleteAdvisors

    } = require('../controllers/advisorsController');

const advisorsRoute = Router();

advisorsRoute.get('/',getAllUAdvisors);
advisorsRoute.get('/:id',getIdAdvisors);
advisorsRoute.get('/:id/Reviews',getAdvisorsAllReviews)

advisorsRoute.post('/',addAdvisors);
advisorsRoute.post('/:id/Reviews',addAdvisorsReviews)

advisorsRoute.put('/:id', updatAdvisors);
advisorsRoute.put('/:id/Reviews/:idr',updatAdvisorsReviews)

advisorsRoute.delete('/:id', deleteAdvisors);

module.exports = advisorsRoute;