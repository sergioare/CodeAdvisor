const firebase = require("../../db/db");
const Item = require("../../models/Item");
const firestore = firebase.firestore();


const getMyCart = async (req, res, next) => {  // get
    try {
      
      const uid = req.params.uid;
      console.log('Entra a getMyCart')
      //const fire = await firestore.collection(`Clients/${uid}/MyCart`);

      firestore.collection(`Clients/${uid}/MyCart`).where("status", "!=", "successful")
        .get()
        .then((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
            
                const item = new Item(
                    doc.id,
                    doc.data().Day || 0,
                    doc.data().EndingHour || 0,
                    doc.data().firstName || "empty",
                    doc.data().Month || 0,
                    doc.data().Price || 0,
                    doc.data().StartingHour || "empty",
                    doc.data().year || 2000,
                    doc.data().aId || "empty",
                    doc.data().hours || 0,
                    doc.data().status || "empty",
                    doc.data().techskill || "empty",
                );
                //   if (doc.data().status === true) {
                       items.push(item);
                //   }
        
                 
        });
        res.send(items);
        return
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            res.status(404).send("the collection Advisors empty");
            return
        });



    //   const items = [];
    //   if (data.empty) {
    //       res.status(404).send("the collection Advisors empty");
    //   } else {
  
    //   }


    } catch (error) {
      res.status(400).send(error.message);
    }
  };



  
  module.exports = {
    getMyCart
  };