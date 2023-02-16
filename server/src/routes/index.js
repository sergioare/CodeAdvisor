//const {Router} = require('express');
const express = require('express');
const router = express.Router();

const userRoute = require("./userRoute");
const dataRoute = require('./dataRoutes')
const getAllUsers  = require('../controllers/usersController');


router.get("/users", getAllUsers)
router.use("/user", userRoute);
router.use('/data', dataRoute)


module.exports = router;