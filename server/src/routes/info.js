const {Router} = require('express');
const firebase = require("../db/db");
const firestore = firebase.firestore();

const infoRoute = Router();


infoRoute.get("/", async(req,res,next) => {
    const id = req.body.id
    //const data = req.body.data
    const collection = req.body.collection
    const data = []
    if(!collection) res.status(404).send("error: collection req")
    if (!id) {
        const fire      = await firestore.collection(collection)
        const dataFire  = await fire.get();

        dataFire.forEach((x) =>{            
            let a = [
                x.id,
                x.data()
            ]
            data.push(a)        
        })
        res.status(200).send(data)
    } else {
        const fire              = await firestore.collection(collection)
        const dataFire              = await fire.get();

        res.send("hola id")
    }
})

infoRoute.post("/", async(req,res,next) => {
    const collection = req.body.collection
    const data = req.body.data
    data.status = true
    try {
        await firestore.collection(collection).add(data);
        res.status(200).send(`se a añadido a colletion: ${collection}.`)
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = infoRoute;