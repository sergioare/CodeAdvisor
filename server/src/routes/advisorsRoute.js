const {Router} = require('express');
const {

    getAllAdvisors,
    getIdAdvisors,
    getAdvisorsAllReviwers,
    getAdvisorsAllSchedules,
            
    addAdvisors,
    addAdvisorsReviwers,
    addAdvisorsSchedules,
    
    updatAdvisors,
    updatAdvisorsReviwers,
    updatAdvisorsSchedules,
    
    deleteAdvisors

    } = require('../controllers/advisorsController');

const advisorsRoute = Router();

advisorsRoute.get('/',getAllAdvisors);
advisorsRoute.get('/:id',getIdAdvisors);
advisorsRoute.get('/:id/Reviwers',getAdvisorsAllReviwers)
advisorsRoute.get('/:id/Schedules',getAdvisorsAllSchedules)

advisorsRoute.post('/',addAdvisors);
advisorsRoute.post('/:id/Reviwers',addAdvisorsReviwers)
advisorsRoute.post('/:id/Schedules',addAdvisorsSchedules)

advisorsRoute.put('/:id', updatAdvisors);
advisorsRoute.put('/:id/Reviwers/:idr',updatAdvisorsReviwers)
advisorsRoute.put('/:id/Schedules/:idr',updatAdvisorsSchedules)

advisorsRoute.delete('/:id', deleteAdvisors);

module.exports = advisorsRoute;