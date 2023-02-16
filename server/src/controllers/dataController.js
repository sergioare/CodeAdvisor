const firebase = require('../db/db');
const {Data, Autor, Reviewrs} = require('../models/database');
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
                    element.data().ocupation || "not found",
                    element.data().about     || "not found",
                    element.data().linkedin  || "not found",
                    element.data().gitHub    || "not found",
                    element.data().email     || "not found",
                    element.data().phone     || "not found",
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

module.exports = {

    getAutores,
    addAutor,
    updateAutor,

    getReviewrs,
    addReviewrs,
    updateReviewrs,

}