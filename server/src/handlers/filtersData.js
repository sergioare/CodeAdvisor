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
    console.log("getAllReviews", aId);
    const reviews = [];
    let sr = 0
    let rs = 0
    try {
        const fire = await firestore.collection(`/Advisors/${aId}/Reviews`);
        const data = await fire.get();
        console.log(data.empty);
        if (data.empty) {
            return ["Reviwers vacios", 0]
        } else {
            data.forEach((doc) => {
                let a = doc.data().score
                console.log(a);
                rs++
                sr = sr + a
                console.log(sr, rs);
                const r = new Reviews(
                    doc.id,
                    doc.data().name||"na",
                    doc.data().img||"na",
                    doc.data().review||"na",
                    doc.data().score
                    );
                    reviews.push(r);
                });
                return [reviews, sr/rs]
            }
    } catch (error) {
        return ["Error Reviwers", 0]
    }
    }
module.exports = {
    getSeletTechSkills,
    getAllReviews
}