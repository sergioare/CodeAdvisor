const { Router } = require('express');
const { mercadopago } = require('../configMercadoPago')
const firebase = require('../db/db')
const { MyWallet } = require("../models/Advisor");
const firestore = firebase.firestore();
const mercadoPagoRouter = Router()



// mercadoPagoRouter.post('/', (req, res) => {
//     const prod = req.body;

//     let preference = {
//         items: [{
//             id: Math.floor(Math.random() * 999999),
//             title: prod.Title,
//             currency_id: "MXN",
//             // description: prod.description,
//             // category_id: prod.category,
//             quantity: prod.Quantity,
//             unit_price: prod.Price
//         }],

//         back_urls: {
//             success : "http://localhost:3000/home",
//             failure: "http://localhost:3002/payment/feedback",
//             pending : ""
//         },
//         auto_return: 'approved',
//         binary_mode: true,

//     }

//     mercadopago.preferences.create(preference)
//     .then((response) => res.status(200).send({ response }))
//     .catch((error) => res.status(400).send({ error: error.message }))
// })

mercadoPagoRouter.get('/feedback', function (req, res) {
        
    if(req.query.status === 'approved'){
        console.log('pago exitos');
        
        res.json({

            Payment: req.query.payment_id,
            Status: req.query.status,
            MerchantOrder: req.query.merchant_order_id
        });
    }

    else{
        console.log('error en el pago');
        res.send('el pago fue erroneo')
    }

});
module.exports = mercadoPagoRouter
