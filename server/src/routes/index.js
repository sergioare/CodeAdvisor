//const {Router} = require('express');
const express = require('express');
const router = express.Router();

//const userRoute = require("./userRoute");
const dataRoute = require('./dataRoutes');
const advisorsRoute  = require('./advisorsRoute');
const clientsRoute = require('./clientsRoute');


router.use("/Clients", clientsRoute);
router.use("/Advisors", advisorsRoute)
router.use('/data', dataRoute)


module.exports = router;