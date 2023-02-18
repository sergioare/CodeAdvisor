const firebase = require("../db/db");
const firestore = firebase.firestore();

const { Reviews ,} = require("../models/Advisors");
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
async function getAllReviews(aId) {
    console.log("id",aId);
    const reviews = [];
    let sr = 0
    let rs = 0
    try {
        const fire = await firestore.collection(`/Advisors/${aId}/Reviews`);
        const data = await fire.get();
        if (data.empty) {
            console.log("id 1");
            return ["Reviwers vacios 1", 0]
        } else {
            data.forEach((doc) => {
                rs++
                sr = sr + doc.data().score
                const r = new Reviews(
                    doc.id,
                    doc.data().name,
                    doc.data().img,
                    doc.data().review,
                    doc.data().score
                    );
                    reviews.push(r);
                });
                console.log(sr/rs);
                return [reviews, sr/rs]
            }
    } catch (error) {
        console.log("id 2");
        return ["Reviwers vacios 2", 0]
    }
    }
module.exports = {
    getSeletTechSkills,
    getAllReviews
}