const firebase = require("../db/db");
const firestore = firebase.firestore();



///////////////////--Get-Data--\\\\\\\\\\\\\\\\\\\\\\\\\
const getData = async (req, res, next) => {
    try {
        const fireUser              = await firestore.collection(`/User`)
        const fireAutores           = await firestore.collection(`/Autores`)
        const fireAdvisors          = await firestore.collection(`/Advisors`)
        const fireTechSkills        = await firestore.collection(`/TechSkills`)
        const fireCommunityComments = await firestore.collection(`/CommunityComments`)

        const dataUser              = await fireUser.get();
        const dataAutores           = await fireAutores.get();
        const dataAdvisors          = await fireAdvisors.get();
        const dataTechSkills        = await fireTechSkills.get();
        const dataCommunityComments = await fireCommunityComments.get();

        let Admin = {User : [], Autores: [], Advisors:[], TechSkills:[], CommunityComments:[]}
        dataUser.forEach((x) =>{  
            let user = {
                id: x.id,
                data: x.data()
            }
            Admin.User.push(user)
        })
        dataAutores.forEach((x) =>{            
            let a = {
                id: x.id,
                data: x.data()
            }
            //Admin.Autores.push(a)        
        })
        dataAdvisors.forEach((x) =>{            
            let a = {
                id: x.id,
                data: x.data()
            }
            Admin.Advisors.push(a)        
        })
        dataTechSkills.forEach((x) =>{            
            let a = {
                id: x.id,
                data: x.data()
            }
            Admin.TechSkills.push(a)        
        })
        dataCommunityComments.forEach((x) =>{            
            let a = {
                id: x.id,
                data: x.data()
            }
            Admin.CommunityComments.push(a)        
        })
        res.status(200).send(Admin)
    } catch (error) {
        res.status(404).send(error.message)
    }
}


///////////////////--Autores--\\\\\\\\\\\\\\\\\\\\\\\\\
const addAutor = async (req, res, next) => {
    const data = req.body;
    try {
        await firestore.collection('Autores').add(data);
        res.send(`Autor: ${data.name}. Succefull`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateAutor = async (req, res, next) => {
    let id = req.body.id
    let status = req.body.status
    try {
        const lData =  await firestore.collection('Autores').doc(id);
        await lData.update({status});
        res.send(`status del Autores: ${id}, ha sido modificado a: ${status}`);
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
        res.send(`TechSkills: ${data.id} añadido`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateTechSkills = async (req, res, next) => {
    let id = req.body.id
    let status = req.body.status
    try {
        const lData =  await firestore.collection('TechSkills').doc(id);
        await lData.update({status});
        res.send(`status del TechSkills: ${id}, ha sido modificado a: ${status}`);
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
    let id = req.body.id
    let status = req.body.status
    try {
        const lData =  await firestore.collection('Specialty').doc(id);
        await lData.update({status});
        res.send(`status del Specialty: ${id}, ha sido modificado a: ${status}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
///////////////////--Advisors--\\\\\\\\\\\\\\\\\\\\\\\\\
const updateAdvisor = async (req, res, next) => {
    let id = req.body.id
    let status = req.body.status
    try {
        const lData =  await firestore.collection('Advisors').doc(id);
        await lData.update({status});
        res.send(`status del Advisors: ${id}, ha sido modificado a: ${status}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
///////////////////--CommunityComments--\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////--Autores--\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////--Autores--\\\\\\\\\\\\\\\\\\\\\\\\\

module.exports = {
    getData,

    addAutor,
    addTechSkills,

    updateAutor,
    updateAdvisor,
    updateTechSkills,
    updateSpecialty
}