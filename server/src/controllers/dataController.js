const firebase = require('../db/db');
const {Data, Autor, Reviewrs, Lengaje, Specialty} = require('../models/database');
const firestore = firebase.firestore();


const getAutores = async (req, res, next) => {
    try {
        const fire = await firestore.collection('Autores');
        const data = await fire.get();
        const autorArray = [];
        if(data.empty) {
            res.status(404).send('base de datos de Autores vacia');
        }else {
            data.forEach(element => {
                const yo = new Autor(
                    element.id,
                    element.data().name      || "not found",
                    element.data().img       || "not found",
                    element.data().ocupation || ["not found"],
                    element.data().about     || "not found",
                    element.data().linkedin  || "not found",
                    element.data().gitHub    || "not found",
                    element.data().email     || "not found",
                    element.data().phone     || 000,
                )
                autorArray.push(yo)
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
        res.send('Autor añadido');
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

const getReviewrs = async (req, res, next) => {
    try {
        const fire = await firestore.collection('Reviewrs');
        const data = await fire.get();
        const revArray = [];
        if(data.empty) {
            res.status(404).send('base de datos de Reviewrs vacia');
        }else {
            data.forEach(element => {
                const yo = new Reviewrs(
                    element.id,
                    element.data().name         || "not found",
                    element.data().img          || "not found",
                    element.data().testimonial  || "not found",
                    element.data().ranking      || 000
                )
                revArray.push(yo)
            });
            res.status(200).send(revArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const addReviewrs = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Reviewrs').doc().set(data);
        res.send('Reviewrs añadido');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateReviewrs = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const reviewr =  await firestore.collection('Reviewrs').doc(id);
        await reviewr.update(data);
        res.send(`Reviewrs con id: ${id}, ha sido modificado`);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLenguajes = async (req, res, next) => {
    try {
        const fire = await firestore.collection('lenguajes');
        const data = await fire.get();
        const lArray = [];
        if(data.empty) {
            res.status(404).send('base de datos de lenguajes vacia');
        }else {
            data.forEach(element => {
                const yo = new Lengaje(
                    element.id,
                    element.data().name        || "not found",
                    element.data().image       || "not found",
                    element.data().traducción  || "not found",
                    element.data().description || "not found",
                )
                lArray.push(yo)
            });
            res.status(200).send(lArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const addLenguajes = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('lenguajes').doc().set(data);
        res.send(`Lenguaje: ${data.name} añadido`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateLenguajes = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const lData =  await firestore.collection('lenguajes').doc(id);
        await lData.update(data);
        let yo = await lData.get()
        res.send(`lenguaje: ${yo.data().name}, ha sido modificado`);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getSpecialty = async (req, res, next) => {
    try {
        const fire = await firestore.collection('Specialty');
        const data = await fire.get();
        const sArray = [];
        if(data.empty) {
            res.status(404).send('base de datos de Specialty vacia');
        }else {
            data.forEach(element => {
                const yo = new Specialty(
                    element.id,
                    element.data().name        || "not found",
                    element.data().descripcion || "not found",
                )
                sArray.push(yo)
            });
            res.status(200).send(sArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
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

    getReviewrs,
    addReviewrs,
    updateReviewrs,

    getLenguajes,
    addLenguajes,
    updateLenguajes,

    getSpecialty,
    getData
}