
const firebase = require('../db/db');
const User = require('../models/User');
const firestore = firebase.firestore();

const getAllUsers = async (req, res, next) => {
    try {
        const user = await firestore.collection('User');
        const data = await user.get();
        const userArray = [];
        if(data.empty) {
            res.status(404).send('No user record found');
        }else {
            data.forEach(doc => {
                
                const user = new User(
                    doc.id,
                    doc.data().id,
                    doc.data().Username,
                    doc.data().Password,
                    doc.data().Name,
                    doc.data().Lastname,
                    doc.data().StatusAdviser,
                    doc.data().StatusAdmin,
                    doc.data().Reviews
                    
                );

                userArray.push(user);
                //console.log(doc.data().Reviews)
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
