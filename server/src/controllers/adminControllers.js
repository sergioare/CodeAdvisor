const firebase = require('../db/db');
const Admin = require('../models/Admin');
const firestore = firebase.firestore();

const addAdmin = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Admin').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const pruebaDeReferencia = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user =  await firestore.collection('User').doc(id);
        await user.get(data);
        res.send(user);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}



//cambiar contreaseñas e info 
//registro a nuvos admin 
//registro de asesores
//listar , agregar  actualizar , eliminar lenguages 

module.exports = {
    addAdmin,
    pruebaDeReferencia
}