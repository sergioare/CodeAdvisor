
const express = require('express');
const router = express.Router();

// const userRoute = require("./userRoute");
const userRoute         = require('./userRoute');
const dataRoute         = require('./dataRoutes')
const advisorsRoute     = require('./advisorsRoute');
const mercadoPagoRouter = require('./mercadoPagoRouter')
const nodeMailerRoutes = require('./nodeMailer')
const adminRoute        = require('./adminRoute');
const chimpMailerRoutes = require('./nchimpMailerRoute')


router.get("/", (req,res) => res.status(200).send('welcome to  °˖✧◝(⁰▿⁰)◜✧˖°   CodeAdvisors_back  °˖✧◝(⁰▿⁰)◜✧˖°  '))

// router.use("/user", userRoute);
router.use('/User', userRoute)

router.use("/Advisors", advisorsRoute)
router.use('/data', dataRoute)

router.use("/Admin", adminRoute)
router.use('/payment', mercadoPagoRouter)
router.use('/contactUs', nodeMailerRoutes)
router.use('/subcribe', chimpMailerRoutes)


module.exports = router;

