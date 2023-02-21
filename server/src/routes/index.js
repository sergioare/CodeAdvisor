
const express = require('express');
const router = express.Router();

// const userRoute = require("./userRoute");
const dataRoute = require('./dataRoutes')
const advisorsRoute  = require('./advisorsRoute');
const mercadoPagoRouter = require('./mercadoPagoRouter')
 
 
router.get("/", (req,res)=>{
    res.status(200).send('hola mundo');
})

// router.get("/users", getAllUsers)
// router.use("/user", userRoute);
router.use("/Advisors", advisorsRoute)
router.use('/data', dataRoute)
router.use('/payment', mercadoPagoRouter)


module.exports = router;

