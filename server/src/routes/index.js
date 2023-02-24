//const {Router} = require('express');
const express = require('express');
const router = express.Router();

const userRoute = require("./userRoute");
const dataRoute = require('./dataRoutes');
const advisorsRoute  = require('./advisorsRoute');
const clientsRoute = require('./clientsRoute');


router.use("/Clients", clientsRoute);

const adminRoute        = require('./adminRoute');


//router.use("/user", userRoute);
router.get("/", (req, res) => res.status(200).end('Hello Cron!'))
router.use('/User', userRoute)
router.use("/Advisors", advisorsRoute)
router.use('/data', dataRoute)

router.use("/Admin", adminRoute)


module.exports = router;