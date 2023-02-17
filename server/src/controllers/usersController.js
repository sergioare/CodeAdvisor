
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
                    doc.data().name         ||  "name_emply", 
                    doc.data().image        ||   "https://st4.depositphotos.com/20838724/23306/v/600/depositphotos_233067620-stock-illustration-customer-support-icon-vector-filled.jpg", 
                    doc.data().techSkills   ||  "emply",
                    doc.data().idiomaNativo ||  "emply",
                    doc.data().ranking      ||  0
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
