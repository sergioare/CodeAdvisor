const firebase = require('../db/db');
const firestore = firebase.firestore();

const {Data, Autor, CommunityComments, TechSkills, Contacts, Specialty} = require('../models/database');

//------------/ AUTORES DE LA PAGINA /--------------------//
const getAutores = async (req, res, next) => {
    try {
        const fire = await firestore.collection('Autores');
        const data = await fire.get();
        const autorArray = [];
        if(data.empty) {
            res.status(404).send('base de datos de Autores vacia');
        }else {
            data.forEach(element => {
                const a = new Autor(
                    element.id,
                    element.data().name         || "empty",
                    element.data().img          || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLy65I94l_MT3xr0Cj9OQNs5_k8Tox9c9qQ&usqp=CAU",  
                    element.data().ocupation    || ["empty"],
                    element.data().about        || "empty",
                    element.data().linkedin     || "empty",
                    element.data().gitHub       || "empty",
                    element.data().email        || "empty",
                    element.data().phone        || "empty"
                )
                if(element.data().status === true) autorArray.push(a)
            });
            res.status(200).send(autorArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//------------/ CommunityComments /--------------------//
const getCommunityComments = async (req, res, next) => {
    try {
        const fire = await firestore.collection('CommunityComments');
        const data = await fire.get();
        const ccArray = [];
        if(data.empty) {
            res.status(404).send('CommunityComments empty');
        }else {
            data.forEach(element => {
                const cc = new CommunityComments(
                    element.id,
                    element.data().name         || "empty",
                    element.data().img          || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLy65I94l_MT3xr0Cj9OQNs5_k8Tox9c9qQ&usqp=CAU",
                    element.data().testimonial  || "empty",
                    element.data().ranking      || "empty"
                )
                if(element.data().status === true){ccArray.push(cc)}
            });
            res.status(200).send(ccArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const addCommunityComments = async (req, res, next) => { 
    const data = req.body;
    data.status = true
    try {
        await firestore.collection('CommunityComments').doc().set(data);
        res.send('CommunityComments añadido');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateCommunityComments = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const reviewr =  await firestore.collection('CommunityComments').doc(id);
        await reviewr.update(data);
        res.send(`CommunityComments con id: ${id}, ha sido modificado`);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//------------/ TechSkills /--------------------//
const getAllTechSkills = async (req, res, next) => {
    try {
        const fire = await firestore.collection('TechSkills');
        const data = await fire.get();
        const tsArray = [];
        if(data.empty) {
            res.status(404).send('TechSkills vacia');
        }else {
            data.forEach(element => {
                console.log(element.data().Description);
                const ts = new TechSkills(
                    element.id,
                    element.data().Name         || "emply",
                    element.data().Image        || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLy65I94l_MT3xr0Cj9OQNs5_k8Tox9c9qQ&usqp=CAU",
                    element.data().Description  || "emply",
                )
                if(element.data().status === true){tsArray.push(ts)}
            });
            res.status(200).send(tsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getIdTechSkills = async (req, res, next) => {
    try {
        const id = req.params.id;
        const fire = await firestore.collection('TechSkills').doc(id);
        const data = await fire.get();
        if(!data.exists) {
            res.status(404).send('TechSkills not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//------------/ Contacts /--------------------//
const getContacts = async (req, res, next) => {
    try {
        const fire = await firestore.collection('Contacts');
        const data = await fire.get();
        const ccArray = [];
        if(data.empty) {
            res.status(404).send('Contacts vacia');
        }else {
            data.forEach(element => {
                const cc = new Contacts(
                    element.id, 
                    element.data().email    || "empty", 
                    element.data().fullName || "empty", 
                    element.data().mensaje  || "empty"
                )
                ccArray.push(cc)
            });
            res.status(200).send(ccArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const addContacts = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Contacts').doc().set(data);
        res.send('Contacts añadido');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//------------/ Specialty /--------------------//
const getSpecialty = async (req, res, next) => {
    try {
        const fire = await firestore.collection('Specialty');
        const data = await fire.get();
        const tsArray = [];
        if(data.empty) {
            res.status(404).send('Specialty vacia');
        }else {
            data.forEach(element => {
                const ts = new Specialty(
                    element.id,
                    element.data().Description  || "empty",
                )
                tsArray.push(ts)
            });
            res.status(200).send(tsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//------------/ OTROS XD DE LA PAGINA /--------------------//
const dx = async (req, res, next) => {
    try {
        const fire              = await firestore.collection(`/XD`)
        const data             = await fire.get();
        const z = []
        data.forEach((x) =>{            
            let a = {
                id: x.id,
                data: x.data()
            }
            z.push(a)        
        })
        res.status(200).send(z);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const xc = async (req,res,next) => {
    const id = req.params.id
    const a = {id}
    try {
        const fire = await firestore.collection("XD").doc(id)
        const data = await fire.get()
        a.data = data.data()
        res.status(200).send(a);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const xd = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('XD').doc().set(data);
        res.send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAutores,

    getCommunityComments,
    addCommunityComments,
    updateCommunityComments,

    getAllTechSkills,
    getIdTechSkills,

    getContacts,
    addContacts,
    

    getSpecialty,xd,xc,dx
}
