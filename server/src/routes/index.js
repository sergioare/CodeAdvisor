
const express = require('express');
const userRoute = require("./userRoute");
const adminRouter = require('./adminRouter')
const getAllUsers  = require('../controllers/usersController');

const router = express.Router();


 
router.get("/", (req,res)=>{
    res.status(200).send('hola mundo');
})

router.get("/users", getAllUsers)

router.use("/user", userRoute);
router.use('/admin', adminRouter)

module.exports = router
