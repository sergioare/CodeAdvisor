
const express = require('express');
const userRoute = require("./userRoute");
const adminRouter = require('./adminRouter')
const dataRoute = require('./dataRoutes')
const getAllUsers  = require('../controllers/usersController');

const router = express.Router();


 
router.get("/", (req,res)=>{
    res.status(200).send('hola mundo');
})

router.get("/users", getAllUsers)
router.use("/user", userRoute);
router.use('/admin', adminRouter)

module.exports = router

router.use('/data', dataRoute)


module.exports = router;

