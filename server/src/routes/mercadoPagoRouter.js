const { Router } = require('express');
const { mercadopago } = require('../configMercadoPago')
const mercadoPagoRouter = Router()

mercadoPagoRouter.post('/', (req, res) => {
    const producto = req.body

    let preference = {
        Items: [{
            id: 4,
            title: producto.Title, 
            currency_id: "MXN",
            quantity: producto.Quantity, 
            unit_price: producto.Price,
        }
        ],
        back_urls: {
            success : "http://localhost:3002/payment/feedback",
            failure: "http://localhost:3002/payment/feedback",
            pending : "http://localhost:3002/payment/feedback"
        },
        auto_return: 'approved',
        binary_mode: true,

    }
    
    console.log(producto)
    mercadopago.preferences.create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }))
})

mercadoPagoRouter.get('/feedback', function (req, res) {
	
    res.json({
        
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});

});
module.exports= mercadoPagoRouter
