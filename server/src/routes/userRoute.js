const {Router} = require('express');
const { 
    getUsers,
    addUser,

    getUser,
    updateUser,

    addUserAdvisors,
    updatUserAdvisors
} = require('../controllers/userController');

const userRoute = Router();

userRoute.get("/", getUsers)
userRoute.post("/", addUser)

userRoute.get("/:Uid", getUser)
userRoute.put("/:Uid", updateUser)

userRoute.post("/:Uid/Advisor/", addUserAdvisors)
userRoute.put("/:Uid/Advisor/", updatUserAdvisors)


module.exports = userRoute;