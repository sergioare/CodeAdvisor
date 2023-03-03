const { Router } = require('express');
const {updatAdvisorsMyWallet} = require('../controllers/advisorsController')
const { mercadopago } = require('../configMercadoPago')
const firebase = require('../db/db')
const { MyWallet } = require("../models/Advisor");
const firestore = firebase.firestore();
const mercadoPagoRouter = Router()



mercadoPagoRouter.post('/', (req, res) => {
    const prod = req.body;

    let preference = {
        items: [{
            id: Math.floor(Math.random() * 999999),
            title: prod.Title,
            currency_id: "MXN",
            // description: prod.description,
            // category_id: prod.category,
            quantity: prod.Quantity,
            unit_price: prod.Price
        }],

        back_urls: {
            success : "http://localhost:3000/home",
            failure: "http://localhost:3002/payment/feedback",
            pending : ""
        },
        auto_return: 'approved',
        binary_mode: true,

    }

    mercadopago.preferences.create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }))
})

mercadoPagoRouter.get('/feedback', async function (req, res) {
        
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

   // https://api.mercadopago.com/v1/payments/${id}?acces_token=APP_USR-6743342351734794-021710-8ae53e0b57b31b817ef87cf5e4da1e93-1312506443
   
        res.json({
        
            Payment: req.query.payment_id,
            Status: req.query.status,
            MerchantOrder: req.query.merchant_order_id
        });
    

    

});
module.exports = mercadoPagoRouter
