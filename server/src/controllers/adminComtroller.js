const firebase = require("../db/db");
const firestore = firebase.firestore();



///////////////////--Get-Data--\\\\\\\\\\\\\\\\\\\\\\\\\
const getUsers = async (req, res, next) => {
    try {
        const fire =  await firestore.collection(`/User`)
        const data = await fire.get();
        let yo = []
        data.forEach((x) =>{            
            yo.push(x.id, x.data())
        })
        res.status(200).send(yo)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
const getAutores = async( res, req, next ) =>{
    try {
        const fire =  await firestore.collection(`/Autores`)
        const data = await fire.get();
        let yo = []
        data.forEach((x) =>{            
            yo.push(x.id, x.data())
        })
        res.status(200).send(yo)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
const getAdvisors = async( res, req, next ) =>{
    try {
        const fire =  await firestore.collection(`/Advisors`)
        const data = await fire.get();
        let yo = []
        data.forEach((x) =>{            
            yo.push(x.id, x.data())
        })
        res.status(200).send(yo)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
const getTechSkills = async( res, req, next ) =>{
    try {
        const fire =  await firestore.collection(`/TechSkills`)
        const data = await fire.get();
        let yo = []
        data.forEach((x) =>{            
            yo.push(x.id, x.data())
        })
        res.status(200).send(yo)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
const getCommunityComments = async( res, req, next ) =>{
    try {
        const fire =  await firestore.collection(`/CommunityComments`)
        const data = await fire.get();
        let yo = []
        data.forEach((x) =>{            
            yo.push(x.id, x.data())
        })
        res.status(200).send(yo)
    } catch (error) {
        res.status(404).send(error.message)
    }
}


///////////////////--Autores--\\\\\\\\\\\\\\\\\\\\\\\\\
const addAutor = async (req, res, next) => {
    const data = req.body;
    try {
        await firestore.collection('Autores').doc().set(data);
        res.send(`Autor: ${data.name}. Succefull`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateAutor = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const autor =  await firestore.collection('Autores').doc(id);
        await autor.update(data);
        res.send(`Autor con id: ${id}, ha sido modificado`);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

///////////////////--TechSkills--\\\\\\\\\\\\\\\\\\\\\\\\\
const addTechSkills = async (req, res, next) => {
    const data = req.body;
    if (!data.id) {
        res.status(404).send(`falta nombre de TechSkills`);
    }
    try {
        await firestore.collection('TechSkills').doc(data.id).set(data);
        res.send(`TechSkills: ${data.name} añadido`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateTechSkills = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const lData =  await firestore.collection('TechSkills').doc(id);
        await lData.update(data);
        let yo = await lData.get()
        res.send(`TechSkills: ${id}, ha sido modificado`);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
///////////////////--Specialty--\\\\\\\\\\\\\\\\\\\\\\\\\
const addSpecialty = async (req, res, next) => {
    const data = req.body;
    if (!data.id) {
        res.status(404).send(`falta nombre de Specialty`);
    }
    try {
        await firestore.collection('Specialty').doc(data.id).set(data);
        res.send(`Specialty: ${data.name} añadido`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateSpecialty = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const lData =  await firestore.collection('Specialty').doc(id);
        await lData.update(data);
        res.send(`Specialty: ${id}, ha sido modificado`);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
///////////////////--Autores--\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////--Autores--\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////--Autores--\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////--Autores--\\\\\\\\\\\\\\\\\\\\\\\\\

module.exports = {
    getUsers,
    getAutores,
    getAdvisors,
    getTechSkills,
    getCommunityComments,

    //updateUsers,
    //updateAutores,
    //updateAdvisors,
    updateTechSkills,
    //updateCommunityComments,
}