const {Router} = require('express');
const {
    getAllUAdvisors,
    getIdAdvisors,
    addAdvisors,
    updatAdvisors,
    deleteAdvisors
    } = require('../controllers/advisorsController');

const advisorsRoute = Router();

advisorsRoute.get('/',getAllUAdvisors);
advisorsRoute.get('/:id',getIdAdvisors);
advisorsRoute.post('/',addAdvisors);
advisorsRoute.put('/:id', updatAdvisors);
advisorsRoute.delete('/:id', deleteAdvisors);

module.exports = advisorsRoute;