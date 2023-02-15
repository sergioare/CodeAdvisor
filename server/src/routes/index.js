const {Router} = require('express');
const express = require('express');
const userRoute = require("./userRoute");

const getAllUsers  = require('../controllers/usersController');



const router = express.Router();

router.get("/users", getAllUsers)

router.use("/user", userRoute);




module.exports = router;

