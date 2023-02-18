const firebase = require('../db/db');
const {Data, Autor, CommunityComments, TechSkills, Specialty} = require('../models/database');
const firestore = firebase.firestore();

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
                    element.data().name,
                    element.data().img || "https://img.freepik.com/vector-premium/fondo-pagina-error-404-distorsion_23-2148086227.jpg?w=2000",  
                    element.data().ocupation,
                    element.data().about,
                    element.data().linkedin,
                    element.data().gitHub,
                    element.data().email,
                    element.data().phone, 
                )
                autorArray.push(a)
            });
            res.status(200).send(autorArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const addAutor = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Autores').doc().set(data);
        res.send(`Autor ${data.name}. Creado`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateAutor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const autor =  await firestore.collection('Autores').doc(id);
        await autor.update(data);
        res.send(`Autor con id: ${id}, ha sido modificado`);        
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
            res.status(404).send('CommunityComments vacia');
        }else {
            data.forEach(element => {
                const cc = new CommunityComments(
                    element.id,
                    element.data().name         || "not found",
                    element.data().img          || "not found",
                    element.data().testimonial  || "not found",
                    element.data().ranking      || 000
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
    try {
        const data = req.body;
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
const getTechSkills = async (req, res, next) => {
    try {
        const fire = await firestore.collection('TechSkills');
        const data = await fire.get();
        const tsArray = [];
        if(data.empty) {
            res.status(404).send('TechSkills vacia');
        }else {
            data.forEach(element => {
                const ts = new TechSkills(
                    element.id,
                    element.data().Name         || "emply",
                    element.data().Image        || "https://thumbs.dreamstime.com/b/concepto-de-errores-icono-simple-del-vector-123196424.jpg",
                    element.data().Translation  || "emply",
                    element.data().Description  || "emply",
                )
                tsArray.push(ts)
            });
            res.status(200).send(tsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
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
                    element.data().Description  || "emply",
                )
                tsArray.push(ts)
            });
            res.status(200).send(tsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
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
//------------/ OTROS XD DE LA PAGINA /--------------------//

const getData = async (req, res, next) => {
    try {
        const fire = await firestore.collection('Data');
        const data = await fire.get();
        const dArray = [];
        if(data.empty) {
            res.status(404).send('base de datos de Data vacia');
        }else {
            data.forEach(element => {
                const yo = new Data(
                    element.id,)
                dArray.push(yo)
            });
            res.status(200).send(dArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {

    getAutores,
    addAutor,
    updateAutor,

    getCommunityComments,
    addCommunityComments,
    updateCommunityComments,

    getTechSkills,
    addTechSkills,
    updateTechSkills,

    getSpecialty,
    getData
}


/*
const getIdCommunityComments = async (req, res, next) => {
    try {
        const id = req.params.id;
        const student = await firestore.collection('Reviewrs').doc(id);
        const data = await student.get();
        if(!data.exists) {
            res.status(404).send(`Reviwer de id ${id} no encontrado`);
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
*/