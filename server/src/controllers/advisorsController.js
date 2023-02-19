
const firebase = require("../db/db");
const firestore = firebase.firestore();

const { Advisors, Reviwers } = require("../models/Advisors");
const { getAllReviews } = require("../handlers/filtersData");
//const { getSeletTechSkills } = require("../handlers/filtersData");


const getAllUAdvisors = async (req, res, next) => {
    console.log("getAllUAdvisors");
    try {
        const fire = await firestore.collection("Advisors");
        const data = await fire.get();
        const advisorsArray = [];
        if (data.empty) {
            res.status(404).send("Advisors found");
        } else {
            data.forEach((doc) => {
                rs = doc.data().score
                const advisors = new Advisors(
                    doc.id,
                    doc.data().Nickname     || "JS",
                    doc.data().Firstname    || "Java",
                    doc.data().Lastname     || "Scipt",
                    doc.data().Contact      || "00-000-00-00",
                    doc.data().Img          || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJvhi_g-RbWsNKvKeB2b-NiaFUkY8dfoTRg&usqp=CAU",
                    doc.data().Residence    || "La Luna!",
                    doc.data().Language     || "Lunar",
                    doc.data().Price        || "000",
                    rs                      || "0",
                    doc.data().About        || "Es confuso verdad? Sin embargo sabes perfectamente cuando estás mal, todo tu cuerpo física y mentalmente te lo hace saber, te notas flojo con pensamientos fatalistas esa sensación que todo está perdido, qué ya nada será como antes, te torturas recordando una vivencia pasada aleatoria en aquel momento ni siquiera parecía un buen momento pero comparado como te sientes ahora podría incluso decirse que... Fuiste feliz sin saberlo",
                    doc.data().Specialty    || ["Vago"],
                    doc.data().TechSkills   || ["Procrastinador"],
                    //rs[0]
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
    console.log("getIdAdvisors");
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
                console.log(rs[0].length, rs[1]);
            }
            //const tech = await getSeletTechSkills(aa)
            const advisors = new Advisors(
                data.id,
                data.data().Nickname    || "JS",   
                data.data().Firstname   || "Java",  
                data.data().Lastname    || "Script",   
                data.data().Contact     || "00-000-00-00",    
                data.data().Img         || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJvhi_g-RbWsNKvKeB2b-NiaFUkY8dfoTRg&usqp=CAU",        
                data.data().Residence   || "La Luna!",  
                data.data().Language    || ["Lunar"],   
                data.data().Price       || "000",      
                rs[1]                   || 0,                  
                data.data().About       || "Es confuso verdad? Sin embargo sabes perfectamente cuando estás mal, todo tu cuerpo física y mentalmente te lo hace saber, te notas flojo con pensamientos fatalistas esa sensación que todo está perdido, qué ya nada será como antes, te torturas recordando una vivencia pasada aleatoria en aquel momento ni siquiera parecía un buen momento pero comparado como te sientes ahora podría incluso decirse que... Fuiste feliz sin saberlo",      
                data.data().Specialty   || ["Vago"],  
                data.data().TechSkills  || ["Proscratinador"], 
                rs[0]                   || ["Sin Reviwers"]
                //tech
                );
                res.send(advisors);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addAdvisors = async (req, res, next) => {
    console.log("addAdvisors");
    const data = req.body;
    try {
        await firestore.collection("Advisors").doc().set(data);
        res.send("Advisors successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updatAdvisors = async (req, res, next) => {
    console.log("updatAdvisors");
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


const getAdvisorsAllReviwers = async (req, res, next) => {
    console.log("getAdvisorsAllReviews");
    const id = req.params.id
    try {
        const fire = await firestore.collection(`/Advisors/${id}/Reviwers`);
        const data = await fire.get();
        const reviwers = [];
        if (data.empty) {
            res.status(404).send("Reviews found");
        } else {
            data.forEach((doc) => {
                const r = new Reviwers(
                    doc.id,
                    doc.data().Name     || "Revi We",
                    doc.data().Img      || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKG8NAvArkwTH6Xr40L7VVpw9yULiu4C6s-w&usqp=CAU",
                    doc.data().Reviwer  || "Reviwer Vacio",
                    doc.data().score    || 0
                    );
                    reviwers.push(r);
                });
                res.send(reviwers);
            }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addAdvisorsReviwers = async (req, res, next) => {
    console.log("addAdvisorsReviews",req.params);
    const id = req.params.id
    const data = req.body;
    const sco = req.body.score
    console.log(id);
    try {
        await firestore.collection(`/Advisors/${id}/Reviews`).doc().set(data);
        const scr = await firestore.collection("Advisors").doc(id);
        const s = await scr.get()
        const score = s.data().score || []
        score.push(sco)
        await scr.update({score});
        res.send("Reviews successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updatAdvisorsReviwers = async (req, res, next) => {
    console.log("updatAdvisorsReviews");
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
    getAdvisorsAllReviwers,

    addAdvisors,
    addAdvisorsReviwers,

    updatAdvisors,
    updatAdvisorsReviwers,
    
    deleteAdvisors
};
