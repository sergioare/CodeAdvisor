/*
 * Queridos programadores del BACK:
 * 
 * Cuando escribi este codigo, solo Dios y yo sabiamos como funcionaba.
 * Ahora, !solo Dios sabe!
 * 
 * Asi que si estas tratando de 'optimizar' este .JS y fracasas (seguramente).
 * 
 * por favor cambiar el siguiente marcador:
 * 
 *  ________________ ____________
 * |   programador  |  codigo    |
 *  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾ ‾‾‾‾‾‾‾‾‾‾‾‾
 * |         3      |     2      |
 *  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾ ‾‾‾‾‾‾‾‾‾‾‾‾
 */
const firebase = require("../db/db");
const firestore = firebase.firestore();

const { Advisors, Reviews } = require("../models/Advisors");
const { getAllReviews } = require("../handlers/filtersData");
//const { getSeletTechSkills } = require("../handlers/filtersData");


const getAllUAdvisors = async (req, res, next) => {
    try {
        const fire = await firestore.collection("Advisors");
        const data = await fire.get();
        const advisorsArray = [];
        if (data.empty) {
            res.status(404).send("Advisors found");
        } else {
            rs = await getAllReviews(data.id)
            console.log(rs);
            data.forEach((doc) => {
                const advisors = new Advisors(
                    doc.id,
                    doc.data().Nickname,
                    doc.data().Firstname,
                    doc.data().Lastname,
                    doc.data().Contact,
                    doc.data().Img,
                    doc.data().Residence,
                    doc.data().Language,
                    doc.data().Price,
                    rs[1],
                    doc.data().About,
                    doc.data().Specialty,
                    doc.data().TechSkills,
                    rs[0]
                    );
                    if (doc.data().status === true) {
                        advisorsArray.push(advisors);
                    }
                });
                res.send(advisorsArray);
            }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getIdAdvisors = async (req, res, next) => {
    const id = req.params.id;
    try {
        const student = await firestore.collection("Advisors").doc(id);
        const data = await student.get();
        if (!data.exists) {
            res.status(404).send("Advisors with the given ID not found");
        } else {
            let rs = ["sin Reviwers",0]
            if(data.data().Reviews === true) {
                rs = await getAllReviews(data.id)
                console.log(rs);
            }
            //const tech = await getSeletTechSkills(aa)
            const advisors = new Advisors(
                data.id,
                data.data().Nickname,
                data.data().Firstname,
                data.data().Lastname,
                data.data().Contact,
                data.data().Img,
                data.data().Residence,
                data.data().Language,
                data.data().Price,
                rs[1],
                data.data().About,
                data.data().Specialty,
                data.data().TechSkills,
                rs[0]
                //tech
                );
                res.send(advisors);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addAdvisors = async (req, res, next) => {
    const data = req.body;
    try {
        await firestore.collection("Advisors").doc().set(data);
        res.send("Advisors successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updatAdvisors = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const user = await firestore.collection("Advisors").doc(id);
        await user.update(data);
        res.send("Advisors updated successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};


const getAdvisorsAllReviews = async (req, res, next) => {
    id = req.params.id
    try {
        const fire = await firestore.collection(`/Advisors/${id}/Reviews`);
        const data = await fire.get();
        const reviews = [];
        if (data.empty) {
            res.status(404).send("Reviews found");
        } else {
            data.forEach((doc) => {
                const r = new Reviews(
                    doc.id,
                    doc.data().name,
                    doc.data().img,
                    doc.data().review
                    );
                    reviews.push(r);
                });
                res.send(reviews);
            }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addAdvisorsReviews = async (req, res, next) => {
    const data = req.body;
    try {
        await firestore.collection(`/Advisors/${id}/Reviews`).doc().set(data);
        res.send("Reviews successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updatAdvisorsReviews = async (req, res, next) => {
    const id = req.params.id;
    const idr = req.params.idr;
    const data = req.body;
    try {
        const rev = await firestore.collection(`/Advisors/${id}/Reviews`).doc(idr);
        await rev.update(data);
        res.send("Reviews updated successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};


const deleteAdvisors = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection("Advisors").doc(id).delete();
        res.send("Advisors deleted successfuly");
    } catch (error) {
    res.status(400).send(error.message);
    }
};

module.exports = {
    getAllUAdvisors,
    getIdAdvisors,
    getAdvisorsAllReviews,

    addAdvisors,
    addAdvisorsReviews,

    updatAdvisors,
    updatAdvisorsReviews,
    
    deleteAdvisors
};
