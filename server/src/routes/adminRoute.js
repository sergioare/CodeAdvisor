const {Router} = require('express');
const { 
    getUsers
} = require('../controllers/adminComtroller');

const adminRoute = Router();

adminRoute.get("/", (req, res) => res.status(200).end('Hello adminComtroller!'))
adminRoute.get("/users/", getUsers)

module.exports = adminRoute;