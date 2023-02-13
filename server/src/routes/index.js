const {Router} = require('express')
const usersRoute = require('./usersRoute')

const mainRouter = Router()

mainRouter.use('/users', usersRoute)
mainRouter.use('/adviser')