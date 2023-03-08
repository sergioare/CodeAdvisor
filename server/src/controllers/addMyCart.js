const firebase = require("../db/db");
const firestore = firebase.firestore();


const addMyCart = async (req, res, next) => {
    try {
      const data = req.body;
      const uid = req.params.uid;
      console.log(data)
      await firestore.collection(`Clients/${uid}/MyCart`).doc().set(data);
      res.send("Client Cart was successfuly added");
    } catch (error) {
      res.status(400).send(error.message);
    }
  };



  
  module.exports = {
    addMyCart
  };