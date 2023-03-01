
const express = require('express');
const router = express.Router();

const clientsRoute = require("./clientsRoute");
const userRoute         = require('./userRoute');
const dataRoute         = require('./dataRoutes')
const advisorsRoute     = require('./advisorsRoute');
const mercadoPagoRouter = require('./mercadoPagoRouter')
const nodeMailerRoutes = require('./nodeMailer')
const adminRoute        = require('./adminRoute');

const chimpMailerRoutes = require('./nchimpMailerRoute');
const infoRoute = require('./info');



router.get("/", (req,res)=>{
    let ruts = [
        '/data ',
        '/User ',
        "/Advisors ",
        '/payment ',
        '/contactUs ',
        '/subcribe ',
        "/Admin ",
    ]
    res.status(200).send(`hola CodeAdvors. Tus rutas son: http://localhost:3002/ + ${ruts}`);
})


// router.get("/users", getAllUsers)
// router.use("/user", userRoute);
router.use("/Clients", clientsRoute);



router.use('/User', userRoute)

router.use("/Advisors", advisorsRoute)
router.use('/data', dataRoute)

router.use("/Admin", adminRoute)
router.use('/payment', mercadoPagoRouter)
router.use('/contactUs', nodeMailerRoutes)
router.use('/subcribe', chimpMailerRoutes)


router.use("/info", infoRoute)

module.exports = router;

