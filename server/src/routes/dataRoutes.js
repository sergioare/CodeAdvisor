const {Router} = require('express');
const {
    getAutores,

    getCommunityComments,
    addCommunityComments,
    updateCommunityComments,

    getAllTechSkills,
    getIdTechSkills,

    getContacts,
    addContacts,

    getSpecialty,xd,dx,xc
    } = require('../controllers/dataController');

const dataRoute = Router();

dataRoute.get('/Autores/',getAutores);

dataRoute.get('/CommunityComments/',getCommunityComments);
dataRoute.post('/CommunityComments/',addCommunityComments);
dataRoute.put('/CommunityComments/:id',updateCommunityComments);

dataRoute.get('/TechSkills/',getAllTechSkills);
dataRoute.get('/TechSkills/:id',getIdTechSkills);

dataRoute.get('/Contacts/',getContacts);
dataRoute.post('/Contacts/',addContacts);

dataRoute.get('/Specialty/',getSpecialty);
dataRoute.get('/XD/',dx);
dataRoute.get('/XD/:id',xc);
dataRoute.post('/XD/',xd);


module.exports = dataRoute;