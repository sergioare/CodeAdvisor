const firebase = require("../db/db");
const Advisors = require("../models/Advisors");
const { getIdTechSkills } = require("./dataController");
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
                    if (doc.data().status === false) {
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
      const aa = data.data().Techskills[0];
      console.log(aa);
      const ff = await firestore.collection("TechSkills").doc(aa);
      const dd = await ff.get();
      if (!dd.exists) {
        console.log("TechSkills not found");
      } else {
        console.log(dd.data());
      }
      res.send(data.data());
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

// export const getAllUsers = () =>{
//     const bdData = 'todos los usuarios'
//     return  bdData
// }

// export const getUser = () =>{
//     const bdData = 'todos los usuarios'
//     return  bdData
// }
