const {Router} = require('express');
const {
    getAutores,
    addAutor,
    updateAutor,

    getCommunityComments,
    addCommunityComments,
    updateCommunityComments,

    getAllTechSkills,
    getIdTechSkills,
    addTechSkills,
    updateTechSkills,

    getSpecialty
    } = require('../controllers/dataController');

const dataRoute = Router();

dataRoute.get('/Autores/',getAutores);
dataRoute.post('/Autores/',addAutor);
dataRoute.put('/Autores/:id',updateAutor);

dataRoute.get('/CommunityComments/',getCommunityComments);
dataRoute.post('/CommunityComments/',addCommunityComments);
dataRoute.put('/CommunityComments/:id',updateCommunityComments);

dataRoute.get('/TechSkills/',getAllTechSkills);
dataRoute.get('/TechSkills/:id',getIdTechSkills);
dataRoute.post('/TechSkills/',addTechSkills);
dataRoute.put('/TechSkills/:id',updateTechSkills);

dataRoute.get('/Specialty/',getSpecialty);


module.exports = dataRoute;