const {Router} = require('express');
const {

    getAllUAdvisors,
    getIdAdvisors,
    getAdvisorsAllReviwers,

    addAdvisors,
    addAdvisorsReviwers,

    updatAdvisors,
    updatAdvisorsReviwers,
    
    deleteAdvisors

    } = require('../controllers/advisorsController');

const advisorsRoute = Router();

advisorsRoute.get('/',getAllUAdvisors);
advisorsRoute.get('/:id',getIdAdvisors);
advisorsRoute.get('/:id/Reviwers',getAdvisorsAllReviwers)

advisorsRoute.post('/',addAdvisors);
advisorsRoute.post('/:id/Reviwers',addAdvisorsReviwers)

advisorsRoute.put('/:id', updatAdvisors);
advisorsRoute.put('/:id/Reviwers/:idr',updatAdvisorsReviwers)

advisorsRoute.delete('/:id', deleteAdvisors);

module.exports = advisorsRoute;