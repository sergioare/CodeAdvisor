const {Router} = require('express');
<<<<<<< HEAD
const {
    addUser, 
    getUser, 
    updateUser,
    deleteUser
    } = require('../controllers/userController');

const userRoute = Router();

userRoute.post('/',addUser);
userRoute.get('/:id',getUser);
userRoute.put('/:id', updateUser);
userRoute.delete('/:id', deleteUser);
=======
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
>>>>>>> 0cfc89457307e4dbbc0d4c044e86d94fa1f355c0


module.exports = userRoute;