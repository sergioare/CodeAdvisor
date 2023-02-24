//const {Router} = require('express');
const express = require('express');
const router = express.Router();

//const userRoute = require("./userRoute");
<<<<<<< HEAD
const dataRoute = require('./dataRoutes');
const advisorsRoute  = require('./advisorsRoute');
const clientsRoute = require('./clientsRoute');


router.use("/Clients", clientsRoute);
=======
const userRoute         = require('./userRoute');
const dataRoute         = require('./dataRoutes')
const advisorsRoute     = require('./advisorsRoute');
const adminRoute        = require('./adminRoute');


//router.use("/user", userRoute);
router.get("/", (req, res) => res.status(200).end('Hello Cron!'))
router.use('/User', userRoute)
>>>>>>> 0cfc89457307e4dbbc0d4c044e86d94fa1f355c0
router.use("/Advisors", advisorsRoute)
router.use('/data', dataRoute)

router.use("/Admin", adminRoute)


module.exports = router;