const { Router } = require('express');
const { mercadopago } = require('../configMercadoPago')
const firebase = require('../db/db')
const { MyWallet } = require("../models/Advisor");
const firestore = firebase.firestore();
const mercadoPagoRouter = Router()


mercadoPagoRouter.get('/feedback', function (req, res) {
        
    if(req.query.status === 'approved'){
        console.log('pago exitos');
        
        // res.json({

        //     Payment: req.query.payment_id,
        //     Status: req.query.status,
        //     MerchantOrder: req.query.merchant_order_id
        // });
    }

    else{
        console.log('error en el pago');
        res.send('el pago fue erroneo')
    }

});
module.exports = mercadoPagoRouter
