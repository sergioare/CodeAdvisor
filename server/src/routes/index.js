
const express = require('express');
const router = express.Router();

const clientsRoute = require("./clientsRoute");
const userRoute         = require('./userRoute');
const dataRoute         = require('./dataRoutes')
const advisorsRoute     = require('./advisorsRoute');
const mercadoPagoRouter = require('./mercadoPagoRouter')
const nodeMailerRoutes = require('./nodeMailer')
const adminRoute        = require('./adminRoute');
const chimpMailerRoutes = require('./nchimpMailerRoute')

 
router.get("/", (req,res)=>{
    res.status(200).send('hola mundo');
})

// router.get("/users", getAllUsers)
//// router.use("/user", userRoute);
router.use("/Clients", clientsRoute);
router.get("/", (req, res) => res.status(200).end('Hello Cron!'))
router.use('/User', userRoute)
router.use("/Advisors", advisorsRoute)
router.use('/data', dataRoute)

router.use("/Admin", adminRoute)
router.use('/payment', mercadoPagoRouter)
router.use('/contactUs', nodeMailerRoutes)
router.use('/subcribe', chimpMailerRoutes)


module.exports = router;

