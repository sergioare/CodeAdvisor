const {Router} = require('express');
const {addUser, 
    getUser, 
   } = require('../controllers/userController');

const userRoute = Router();

userRoute.post('/',addUser);
userRoute.get('/:id',getUser);


module.exports = userRoute;