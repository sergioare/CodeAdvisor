
//esto viene de controllers
const {
    getAllUsers,
    getUser
} = require('../controllers/usersController')

const getUsersHandler = (req, res) => {
    res.status(200).send(getAllUsers)
}
const  getUserHandler = (req, res) => {
    res.status(200).send(getUser)
}



module.exports = { getUsersHandler ,getUserHandler}