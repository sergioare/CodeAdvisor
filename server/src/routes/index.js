//const {Router} = require('express');
const express = require('express');
const router = express.Router();

const userRoute = require("./userRoute");
const dataRoute = require('./dataRoutes')
const getAllUsers  = require('../controllers/usersController');


<<<<<<< HEAD

const router = express.Router();

router.get("/users", getAllUsers);

=======
router.get("/users", getAllUsers)
>>>>>>> ade708211bfcec29742ccb751c183e6ed26be972
router.use("/user", userRoute);
router.use('/data', dataRoute)


module.exports = router;