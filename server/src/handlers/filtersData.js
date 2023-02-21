const firebase = require("../db/db");
const firestore = firebase.firestore();

const { Reviwers, Schedules } = require("../models/Advisors");
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
    console.log("get_All_Reviwers");
    const reviews = [];
    let sr = 0
    let rs = 0
    try {
        const fire = await firestore.collection(`/Advisors/${aId}/Reviwers`);
        const data = await fire.get();
        if (data.empty) {
            return ["Reviwers empty", 0]
        } else {
            data.forEach((doc) => {
                let a = doc.data().score || 1
                rs++
                sr = sr + a
                const r = new Reviwers(
                    doc.id,
                    doc.data().Name     || "empty",
                    doc.data().Img      || "empty",
                    doc.data().Reviwer   || "empty",
                    doc.data().score    || 1
                    );
                    reviews.push(r);
                });
                return [reviews, sr/rs]
            }
    } catch (error) {
        console.log(error);
        return ["Error Reviwers", 0]
    }
}
async function getAllSchedules(aId) {
    console.log("get_All_Schedules");
    const schedules = [];
    try {
        const fire = await firestore.collection(`/Advisors/${aId}/Schedules`);
        const data = await fire.get();
        if (data.empty) {
            return ["Schedules empty"]
        } else {
            data.forEach((doc) => {
                const schedule = new Schedules(
                    doc.id,
                    doc.data().Class    || "empty",
                    doc.data().About    || "empty",
                    doc.data().Meet     || "empty",
                    doc.data().Start    || { "seconds": 0000000000, "nanoseconds": 000000000 }, 
                    doc.data().End      || { "seconds": 0000000000, "nanoseconds": 000000000 }
                    );
                    schedules.push(schedule);
                });
                return schedules
            }
    } catch (error) {
        console.log(error);
        return ["Error Schedules"]
    }
}

module.exports = {
    getSeletTechSkills,
    getAllReviews,
    getAllSchedules
}
