const {Router} = require('express');
const {

    getAllAdvisors,
    getIdAdvisors,
    getAdvisorsAllReviwers,
    getAdvisorsAllSchedules,
    getAdvisorsAllMyWallet,
            
    addAdvisorsReviwers,
    addAdvisorsSchedules,
    addAdvisorsMyWallet,
    
    
    updatAdvisorsReviwers,
    updatAdvisorsSchedules,
    
    
    deleteAdvisors

    } = require('../controllers/advisorsController');
const { createAdvisorFromClient } = require('../controllers/clientsController');

const advisorsRoute = Router();

advisorsRoute.get('/',getAllAdvisors);
advisorsRoute.get('/:id',getIdAdvisors);
advisorsRoute.get('/:id/Reviwers',getAdvisorsAllReviwers)
advisorsRoute.get('/:id/Schedules',getAdvisorsAllSchedules)
advisorsRoute.get('/:id/MyWallet',getAdvisorsAllMyWallet)

advisorsRoute.post('/:id/Reviwers',addAdvisorsReviwers)
advisorsRoute.post('/:id/Schedules',addAdvisorsSchedules)
advisorsRoute.post('/:id/MyWallet',addAdvisorsMyWallet)
advisorsRoute.post('/Create/:uid', createAdvisorFromClient)

advisorsRoute.put('/:id/Reviwers/:idr',updatAdvisorsReviwers)
advisorsRoute.put('/:id/Schedules/:idr',updatAdvisorsSchedules)

advisorsRoute.delete('/:id', deleteAdvisors);

module.exports = advisorsRoute;