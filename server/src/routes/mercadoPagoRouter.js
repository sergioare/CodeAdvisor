const { Router } = require('express');
// const {updatAdvisorsMyWallet} = require('../controllers/advisorsController')
const { mercadopago } = require('../configMercadoPago')
const firebase = require('../db/db')
const { MyWallet } = require("../models/Advisor");
const axios = require('axios')
require('dotenv').config()
const firestore = firebase.firestore();
const mercadoPagoRouter = Router()



mercadoPagoRouter.post('/payment/:id/MyWallet', async (req, res) => {
    console.log("Advisors_add_MyWallet", req.params);
    
    try {
        const aid = req.params.id
    const uid = req.body.id
    const dataAdvisor = {
        userName: req.body.dataAdvisor.userName,
        TechSkills: req.body.dataAdvisor.TechSkills,
        myPayment: req.body.dataAdvisor.myPayment,
        status: true,
        isPay: false
    };
    const dataUser = {
        advisorName: req.body.dataUser.advisorName,
        TechSkills: req.body.dataUser.TechSkills,
        myPurchase: req.body.dataUser.myPurchase,
        status: true,
        isPay: false
    };
    const itemsOrder ={
        title: req.body.itemsOrder.title,
        quantity: req.body.itemsOrder.quantity,
        unit_price: req.body.itemsOrder.unit_price,
                        
    };
        await firestore.collection(`/Advisors/${aid}/MyWallet`).add(dataAdvisor);
        await firestore.collection(`/Clients/${uid}/MyCart`).add(dataUser);

        const fireAdvisors = await firestore.collection("Advisors").doc(aid)
        const fireUser = await firestore.collection("Clients").doc(uid)
        await fireAdvisors.update({ statusMyWallet: true })
        await fireUser.update({ statusMyCart: true })
            .then(respuesta => {
                let preference = {
                    // metadata: {id_advisor:"1csSa5BfzTWBMYBRFXTr", id_user:"RoWSEtBYcld2IRiJgc918g2dqOy2"},
                    metadata: {
                        idShop:2020,
                     },
                    notification_url: "https://code-advisor-back-8wg58l3yj-angel-pv.vercel.app/store",
                        items: [{
                        id: Math.floor(Math.random() * 999999),
                        title: itemsOrder.title,
                        currency_id: "MXN",
                        quantity: itemsOrder.quantity,
                        unit_price: itemsOrder.unit_price
                    }],

                    back_urls: {
                        success: "http://localhost:3002/store/feedback",
                        failure: "http://localhost:3002/payment/feedback",
                        pending: ""
                    },
                    auto_return: 'approved',
                }


                mercadopago.preferences.create(preference)
                    .then((response) => res.status(200).send({ response }))
                    .catch((error) => res.status(400).send({ error: error.message }))
            });
    } catch (error) {
        res.status(400).send(error.message);
    }
})

mercadoPagoRouter.get('/feedback', async function (req, res) {

    res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id 
})

        })


mercadoPagoRouter.post("/webhooks/", async (req, res) => {
   console.log(req.body)
    const id = 55329653357
    try {
    //   if (id !== "123456789" && type === "payment") {
        const { data } = await axios.get(
          `https://api.mercadopago.com/v1/payments/${id}`,
          {
            headers: {
              Authorization: "Bearer " + process.env.MERCADOPAGO_KEY,
            },
          }
        );
        console.log(data);
        res.send('OK')
    //     const {metadata:{id_shop}} = data;
    //     console.log(id_shop);
        // if (data.status === "approved" && data.status_detail === "accredited") {
        //   const docRef = doc(database, "ordenes de compra", id_shop);
        //   updateDoc(docRef, {ispaid:"approved"}).then(docRef => {
        //       console.log("A New Document Field has been added to an existing document");
        //   }
        //   )
        //   .catch(error => {
        //       console.log(error);
        //   })
        // }
    //   }
    } catch (error) {
      console.log(error);
    }

  
        })


mercadoPagoRouter.post('/', async (req, res) => {

    
    console.log(req.body)
    // try {
     
    //     const { data } = await axios.get(
    //       `https://api.mercadopago.com/v1/payments/${id}`,
    //       {
    //         headers: {
    //           Authorization: "Bearer " + process.env.ACCESS_TOKEN,
    //         },
    //       }
    //     );
    //     console.log(data);
       
        
      
    // } catch (error) {
    //   console.log(error);
    // }
  
    return res.status(200).send("OK");

})

module.exports = mercadoPagoRouter


  // try {
    //     if (req.query.status === 'approved') {
    //         const rev = await firestore.collection(`/Advisors/${id}/MyWallet`).doc(idr);
    //     await rev.update(data);
    //     res.send("MyWallet updated successfuly")
    //         .catch(error => {
    //             console.log(error);
    //         })
    //       }
    // } catch (error) {
        
    // }