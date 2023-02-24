const firebase = require("../db/db");
const Clients = require("../models/Clients");
const firestore = firebase.firestore();


const addClients = async (req, res, next) => {
    try {
      const data = req.body;
      const uid = req.params.uid;
      await firestore.collection("Clients").doc(uid).set(data);
      res.send("Client successfuly");
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  


  module.exports = {
    addClients
  };