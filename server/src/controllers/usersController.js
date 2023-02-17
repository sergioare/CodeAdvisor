
const firebase = require('../db/db');
const User = require('../models/User');
const firestore = firebase.firestore();

const getAllUsers = async (req, res, next) => {
    try {
        const user = await firestore.collection('user');
        const data = await user.get();
        const userArray = [];
        if(data.empty) {
            res.status(404).send('No user record found');
        }else {
            data.forEach(doc => {
                
                const user = new User(
                    doc.id,
                    doc.data().name, 
                    doc.data().image, 
                    doc.data().techSkills,
                    doc.data().idiomaNativo,
                    doc.data().ranking
                );
                userArray.push(user);
            });
            res.send(userArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = getAllUsers;



















// export const getAllUsers = () =>{
//     const bdData = 'todos los usuarios'
//     return  bdData
// }

// export const getUser = () =>{
//     const bdData = 'todos los usuarios'
//     return  bdData
// }
