const {Router} = require('express');
const { 
    getUsers,
    getUser,
    
    addUser,
    updateUser,

    addUserAdvisors,
    updatUserAdvisors,

    addaa
} = require('../controllers/userController');

const userRoute = Router();

userRoute.get("/",     getUsers)
userRoute.get("/:uId", getUser)

userRoute.post("/",     addUser)
userRoute.put ("/:uId", updateUser)

userRoute.post("/:uId/Advisor/",     addUserAdvisors)
userRoute.put ("/:uId/Advisor/:aId", updatUserAdvisors)



userRoute.post("/addAdvisor/", addaa)



module.exports = userRoute;