const { Router } = require("express");
//esto vide de handlers
const {
    getUsersHandler,
    getUserHandler
} = require('../handlers/usersHandlers')

const usersRoute = Router()

usersRoute.get('/',getUsersHandler)
usersRoute.get('/:id',getUserHandler)
usersRoute.post('/')

module.exports = usersRoute