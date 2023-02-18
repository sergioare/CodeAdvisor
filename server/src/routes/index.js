//const {Router} = require('express');
const express = require('express');
const router = express.Router();

//const userRoute = require("./userRoute");
const dataRoute = require('./dataRoutes')
const advisorsRoute  = require('./advisorsRoute');


//router.use("/user", userRoute);
router.use("/Advisors", advisorsRoute)
router.use('/data', dataRoute)


module.exports = router;