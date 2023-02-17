const {Router} = require('express');

const {
    addAdmin,
    pruebaDeReferencia
} = require('../controllers/adminControllers');

const adminRouter= Router()


adminRouter.get('/',pruebaDeReferencia)

module.exports = adminRouter;