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
 * |         1      |     2      |
 *  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾ ‾‾‾‾‾‾‾‾‾‾‾‾
 */
const firebase = require("../db/db");
//const { getSeletTechSkills } = require("../handlers/filtersData");
const Advisors = require("../models/Advisors");
const firestore = firebase.firestore();

const getAllUAdvisors = async (req, res, next) => {
    console.log(req.params);
    try {
        const fire = await firestore.collection("Advisors");
        const data = await fire.get();
        const advisorsArray = [];
        if (data.empty) {
            res.status(404).send("Advisors found");
        } else {
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
                    doc.data().Score,
                    doc.data().About,
                    doc.data().Specialty,
                    doc.data().TechSkills
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
    try {
        const id = req.params.id;
        const student = await firestore.collection("Advisors").doc(id);
        const data = await student.get();
        if (!data.exists) {
            res.status(404).send("Advisors with the given ID not found");
        } else {
            const aa = data.data().TechSkills
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
                data.data().Score,
                data.data().About,
                data.data().Specialty,
                data.data().TechSkills
                //tech
                );
                res.send(advisors);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addAdvisors = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("Advisors").doc().set(data);
    res.send("Advisors successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updatAdvisors = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await firestore.collection("Advisors").doc(id);
    await user.update(data);
    res.send("Advisors updated successfuly");
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
  addAdvisors,
  updatAdvisors,
  deleteAdvisors,
};
