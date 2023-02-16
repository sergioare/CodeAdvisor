const {Router} = require('express');
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


module.exports = userRoute;