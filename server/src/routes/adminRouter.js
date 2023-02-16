const {Router} = require('express');

const {
    addAdmin
} = require('../controllers/adminControllers');

const adminRouter= Router()


adminRouter.post('/',addAdmin)

module.exports = adminRouter;