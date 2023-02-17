const {Router} = require('express');
const {
    getAllUAdvisors,
    getIdAdvisorsAdvisors,
    addAdvisorsAdvisors,
    updatAdvisors,
    deleteAdvisors
    } = require('../controllers/advisorsController');

const advisorsRoute = Router();

advisorsRoute.get('/',getAllUAdvisors);
advisorsRoute.get('/:id',getIdAdvisorsAdvisors);
advisorsRoute.post('/',addAdvisorsAdvisors);
advisorsRoute.put('/:id', updatAdvisors);
advisorsRoute.delete('/:id', deleteAdvisors);

module.exports = advisorsRoute;