const firebase = require("../db/db");
const firestore = firebase.firestore();

const { Advisors, Reviwers, Schedules, MyWallet } = require("../models/Advisors");
const { getAllReviews, getAllSchedules } = require("../handlers/filtersData");
const dataTechSkills = [
    'JS',
    'PY',
    'Java',
    'Ruby',
    'PHP',
    'C++',
    'C#',
    'C',
    'HTML',
    'CSS',
    'YOLO',
]
const dataCountries = [
    'Argentina',
    'Bolivia',
    'Brazil',
    'Canada',
    'Colombia',
    'Chile',
    'Mexico',
    'Paraguay',
    'Peru',
    'U.S.A.',
    'U.K.',
]

//------------/ Advisors /-----------------------------------------//
const getAllAdvisors = async (req, res, next) => {
    console.log("get_All_Advisors");
    try {
        const fire = await firestore.collection("Advisors");
        const data = await fire.get();
        const advisors = [];
        if (data.empty) {
            res.status(404).send("the collection Advisors empty");
        } else {
            data.forEach((doc) => {
                let score = [0]
                if (doc.data().score && doc.data().score.length > 1) {
                    let s = 0
                    score = doc.data().score
                    score.map(x => s = s + x)
                    score = [s / score.length]
                }
                const advisor = new Advisors(
                    doc.id,
                    doc.data().Nickname || "empty",
                    doc.data().Firstname || "empty",
                    doc.data().Lastname || "empty",
                    doc.data().Contact || "00-000-00-00",
                    doc.data().Img || "https://img.freepik.com/vector-premium/fondo-pagina-error-404-distorsion_23-2148086293.jpg?w=2000",
                    doc.data().Residence || "empty",
                    doc.data().Language || "empty",
                    doc.data().Price || "000",
                    score || doc.data().score,
                    doc.data().About || "empty",
                    doc.data().Specialty || ["empty"],
                    doc.data().TechSkills || ["empty"],
                );
                if (doc.data().status === true) {
                    advisors.push(advisor);
                }
            });
            res.send(advisors);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getIdAdvisors = async (req, res, next) => {
    console.log("get_Id_Advisors");
    const id = req.params.id;
    try {
        const fire = await firestore.collection("Advisors").doc(id);
        const data = await fire.get();
        if (!data.exists) {
            res.status(404).send(`Advisor with id: ${id}. Does not exist`);
        } else {
            let reviwers = [[],0]
            let schedules = []
            if(data.data().statusReviwers === true) {
                reviwers = await getAllReviews(data.id)
            }
            if (data.data().statusSchedules === true) {
                schedules = await getAllSchedules(data.id)
            }
            const advisors = new Advisors(
                data.id,
                data.data().Nickname || "empty",
                data.data().Firstname || "empty",
                data.data().Lastname || "empty",
                data.data().Contact || "00-000-00-00",
                data.data().Img || "https://img.freepik.com/vector-premium/fondo-pagina-error-404-distorsion_23-2148086293.jpg?w=2000",
                data.data().Residence || "empty",
                data.data().Language || ["empty"],
                data.data().Price || "000",
                reviwers[1],
                data.data().About || "empty",
                data.data().Specialty || ["empty"],
                data.data().TechSkills || ["empty"],
                reviwers[0],
                schedules
            );


            // if (advisor.statusMyWallet === true) {
            //         newAdvisor.MyWallet = await getFilterAdvisorAllMyWallet(aId)
            //     } else newAdvisor.MyWallet = []
            //     if (advisor.statusReviwers === true) {
            //         let ss = 0
            //         newAdvisor.Reviwers = await getFilterAdvisorAllReviwers(aId)
            //         newAdvisor.Reviwers.map((s) => {
            //             ss = ss + s.score
            //         })
            //         newAdvisor.score = ss / newAdvisor.Reviwers.length            
            //     } else advisor.Reviwers = [], advisor.score = 0
            //     if (advisor.statusSchedules === true) {
            //         newAdvisor.Schedules = await getFilterAdvisorAllSchedules(aId)
            //     } else newAdvisor.Schedules = []


            res.send(advisors);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};


//------------/ Advisors Reviwers /-------------------------------------//
const getAdvisorsAllReviwers = async (req, res, next) => {
    console.log("get:Advisors_All_Reviews");
    const id = req.params.id
    console.log(req.params)
    const reviwers = [];
    try {
        const fire = await firestore.collection(`/Advisors/${id}/Reviwers`);
        const data = await fire.get();
        if (data.empty) {
            res.status(404).send("the collection Reviwers empty");
        } else {
            data.forEach((doc) => {
                const r = new Reviwers(
                    doc.id,
                    doc.data().Name || "empty",
                    doc.data().Img || "https://img.freepik.com/vector-premium/fondo-pagina-error-404-distorsion_23-2148086293.jpg?w=2000",
                    doc.data().Reviwer || "empty",
                    doc.data().score || 0
                );
                if (doc.data().status === true) {
                    reviwers.push(r);
                }
            });
            res.send(reviwers);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addAdvisorsReviwers = async (req, res, next) => {
    console.log("Advisor_add_Reviwer");
    const id = req.params.id
    const reviewdata = req.body;
    const reviewScore = req.body.score || 1
    const statusReviwers = true
    reviewdata.status = true
    try {
        await firestore.collection(`/Advisors/${id}/Reviwers`).add(reviewdata);
        const fire = await firestore.collection("Advisors").doc(id);
        const data = await fire.get()
        const score = data.data().score || []
        score.push(reviewScore)
        await fire.update({ score });
        await fire.update({ statusReviwers });
        res.send("Reviews successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updatAdvisorsReviwers = async (req, res, next) => {
    console.log("updat_Advisors_Reviwers");
    const id = req.params.id;
    const idr = req.params.idr;
    const data = req.body;
    try {
        const rev = await firestore.collection(`/Advisors/${id}/Reviwers`).doc(idr);
        await rev.update(data);
        res.send("Reviwers updated successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

//------------/ Advisors Schedules /-------------------------------------//
const getAdvisorsAllSchedules = async (req, res, next) => {
    console.log("get_Advisors_All_Schedules");
    const id = req.params.id
    try {
        const fire = await firestore.collection(`/Advisors/${id}/Schedules`);
        const data = await fire.get();
        const schedules = [];
        if (data.empty) {
            res.status(404).send("the collection Schedules empty");
        } else {
            data.forEach((doc) => {
                const schedule = new Schedules(
                    doc.id,
                    doc.data().Class || "empty",
                    doc.data().Student || "empty",
                    doc.data().Meet || "empty",
                    doc.data().Start || { "seconds": 0000000000, "nanoseconds": 000000000 },
                    doc.data().End || { "seconds": 0000000000, "nanoseconds": 000000000 },
                );
                if (doc.data().status === true) {
                    schedules.push(schedule);
                }
            });
            res.send(schedules);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addAdvisorsSchedules = async (req, res, next) => {
    console.log("Advisors_add_Schedules", req.params);
    const id = req.params.id
    const data = req.body;
    const statusSchedules = true
    data.status = true
    try {
        await firestore.collection(`/Advisors/${id}/Schedules`).add(data);
        const fire = await firestore.collection("Advisors").doc(id);
        await fire.update({ statusSchedules });
        res.send("Schedules successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updatAdvisorsSchedules = async (req, res, next) => {
    console.log("Advisors_updat_Schedules");
    const id = req.params.id;
    const idr = req.params.idr;
    console.log("params", req.params);
    console.log("body", req.body);
    const data = req.body;
    try {
        const rev = await firestore.collection(`/Advisors/${id}/Schedules`).doc(idr);
        //await rev.update(data);
        res.send("Schedules updated successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

//------------/ Advisors MyWallet /-------------------------------------//
const getAdvisorsAllMyWallet = async (req, res, next) => {
    console.log("get_Advisors_All_MyWallet");
    const id = req.params.id
    try {
        const fire = await firestore.collection(`/Advisors/${id}/MyWallet`);
        const data = await fire.get();
        const myWallets = [];
        if (data.empty) {
            res.status(404).send("the collection MyWallet empty");
        } else {
            data.forEach((doc) => {
                const myWallet = new MyWallet(
                    doc.data().userName || "empty",
                    doc.data().TechSkills || "empty",
                    doc.data().myPayment || "empty",
                );
                if (doc.data().status === true) {
                    myWallets.push(myWallet);
                }
            });
            res.send(myWallets);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addAdvisorsMyWallet = async (req, res, next) => {
    console.log("Advisors_add_MyWallet", req.params);
    const aid = req.params.id
    const uid = req.body.id
    const dataAdvisor = {
        userName: req.body.userName,
        TechSkills: req.body.TechSkills,
        myPayment: req.body.price,
        status: true
    };
    const dataUser = {
        advisorName: req.body.advisorName,
        TechSkills: req.body.TechSkills,
        myPurchase: req.body.price,
        status: true
    };
    try {
        await firestore.collection(`/Advisors/${aid}/MyWallet`).add(dataAdvisor);
        await firestore.collection(`/User/${uid}/MyCart`).add(dataUser);

        const fireAdvisors = await firestore.collection("Advisors").doc(aid);
        const fireUser = await firestore.collection("User").doc(uid);
        await fireAdvisors.update({ statusMyWallet: true });
        await fireUser.update({ statusMyCart: true });
        res.send("MyWallet successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};


//------------/ Delete  /-------------------------------------//
const deleteAdvisors = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection("Advisors").doc(id).delete();
        res.send("Advisors deleted successfuly");
    } catch (error) {
        res.status(400).send(error.message);
    }
};


// const getIdAdvisors = async (req, res, next) => {     //  https://github.com/Angel-pv/CodeAdvisor_Back/blob/main/src/controllers/advisorsController.js
//     console.log("get_Id_Advisors");
//     const aId = req.params.aId;
//     try {
//         const fireColl = await firestore.collection("Advisors").doc(aId);
//         const fireAdvi = await fireColl.get();
//         if (!fireAdvi) {
//             res.status(404).send(`Advisor with id: ${aId}. Does not exist`);
//         } else {
//             const advisor = fireAdvi.data()
//             console.log(advisor)
//             const newAdvisor = new Advisors(
//                 advisor.Firstname       || "",
//                 advisor.Lastname        || "",
//                 advisor.Img             || "https://img.freepik.com/vector-premium/fondo-pagina-error-404-distorsion_23-2148086293.jpg?w=2000",
//                 advisor.About           || "",
//                 advisor.Residence       || "",
//                 advisor.Language        || [],
//                 advisor.Specialty       || [],
//                 advisor.TechSkills      || [],
//                 advisor.Price           || 00,
//                 advisor.statusMyWallet  || false,
//                 advisor.statusReviwers  || false,
//                 advisor.statusSchedules || false,
//             )
//             if (advisor.statusMyWallet === true) {
//                 newAdvisor.MyWallet = await getFilterAdvisorAllMyWallet(aId)
//             } else newAdvisor.MyWallet = []
//             if (advisor.statusReviwers === true) {
//                 let ss = 0
//                 newAdvisor.Reviwers = await getFilterAdvisorAllReviwers(aId)
//                 newAdvisor.Reviwers.map((s) => {
//                     ss = ss + s.score
//                 })
//                 newAdvisor.score = ss / newAdvisor.Reviwers.length            
//             } else advisor.Reviwers = [], advisor.score = 0
//             if (advisor.statusSchedules === true) {
//                 newAdvisor.Schedules = await getFilterAdvisorAllSchedules(aId)
//             } else newAdvisor.Schedules = []

//                 res.send(newAdvisor);
//         }
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

module.exports = {
    getAllAdvisors,
    getIdAdvisors,
    getAdvisorsAllReviwers,
    getAdvisorsAllSchedules,

    addAdvisorsReviwers,
    addAdvisorsSchedules,

    updatAdvisorsReviwers,
    updatAdvisorsSchedules,

    getAdvisorsAllMyWallet,
    addAdvisorsMyWallet,

    deleteAdvisors
};
