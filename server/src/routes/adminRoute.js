const {Router} = require('express');
const { 
    getData,
    
    addAutor,
    addTechSkills,

    updateAutor,
    updateAdvisor,
    updateTechSkills,
    updateSpecialty
} = require('../controllers/adminComtroller');

const adminRoute = Router();

adminRoute.get("/", getData)

adminRoute.post("/Autor/", addAutor)
adminRoute.post("/TechSkills/", addTechSkills)



adminRoute.put("/Autor/", updateAutor)
adminRoute.put("/Advisors/", updateAdvisor)
adminRoute.put("/Specialty/", updateSpecialty)
adminRoute.put("/TechSkills/", updateTechSkills)

module.exports = adminRoute;