import {getAllUsers, getUser} from '../controllers/usersController';
//esto viene de controllers
// const {
//     getAllUsers,
//     getUser
// } = require('../controllers/usersController')

export const getUsersHandler = (req, res) => {
    res.status(200).send(getAllUsers)
}
export const  getUserHandler = (req, res) => {
    res.status(200).send(getUser)
}



//module.exports = { getUsersHandler ,getUserHandler}