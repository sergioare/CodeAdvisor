
const firebase = require('../db/db');
const Advisors = require('../models/Advisors');
const firestore = firebase.firestore();

const getAllUAdvisors = async (req, res, next) => {
    console.log(req.params);
    try {
        const fire = await firestore.collection('Advisors');
        const data = await fire.get();
        const advisorsArray = [];
        if(data.empty) {
            res.status(404).send('Advisors found');
        }else {
            data.forEach(doc => {
                const advisors = new Advisors(
                    doc.id,
                    doc.data().Contact      ||  "emply",
                    doc.data().Nickname     ||  "emply",
                    doc.data().Firstname    ||  "emply",
                    doc.data().Lastname     ||  "emply",
                    doc.data().Image        ||  "https://st4.depositphotos.com/20838724/23306/v/600/depositphotos_233067620-stock-illustration-customer-support-icon-vector-filled.jpg",
                    doc.data().Residence    ||  "emply",
                    doc.data().Price        ||  "emply",
                    doc.data().Score        ||  0,
                    doc.data().About        ||  "emply",
                    doc.data().Specialty    ||  ["emply"],
                    doc.data().TechSkills   ||  ["emply"]
                );
                advisorsArray.push(advisors);
            });
            res.send(advisorsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getIdAdvisors = async (req, res, next) => {
    try {
        const id = req.params.id;
        const student = await firestore.collection('Advisors').doc(id);
        const data = await student.get();
        if(!data.exists) {
            res.status(404).send('Advisors with the given ID not found');
        }else {

            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addAdvisors = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Advisors').doc().set(data);
        res.send('Advisors successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatAdvisors = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user =  await firestore.collection('Advisors').doc(id);
        await user.update(data);
        res.send('Advisors updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteAdvisors = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('Advisors').doc(id).delete();
        res.send('Advisors deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = { 
    getAllUAdvisors,
    getIdAdvisors,
    addAdvisors,
    updatAdvisors,
    deleteAdvisors
}




















// export const getAllUsers = () =>{
//     const bdData = 'todos los usuarios'
//     return  bdData
// }

// export const getUser = () =>{
//     const bdData = 'todos los usuarios'
//     return  bdData
// }
