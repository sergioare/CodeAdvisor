const firebase = require("../db/db");
const firestore = firebase.firestore();

const { TechSkills } = require("../models/database");


async function getSeletTechSkills(ids) {
    let fire = await firestore.collection("TechSkills");
    let data = await fire.get();
    let idl = []
    if (data.empty) {
        return "TechSkills no encontrado!";
    } else {
        data.forEach((doc) => {
            const tech = new TechSkills(
                doc.id,
                doc.data().Name,
                doc.data().Image,
                doc.data().Description
                ); 
            ids.map(id => {if(id === tech.id) idl.push(tech)})
        });
    }
    return idl
}

module.exports = {
    getSeletTechSkills
}