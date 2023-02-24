const { Router } = require('express');
const { mercadopago } = require('../configMercadoPago')
const mercadoPagoRouter = Router()

mercadoPagoRouter.post('/', (req, res) => {
    const prod = req.body;

    let preference = {
        items: [{
            id: 11,
            title: prod.Title,
            currency_id: "MXN",
            // description: prod.description,
            // category_id: prod.category,
            quantity: prod.Quantity,
            unit_price: prod.Price
        }],

        back_urls: {
            failure: "/failure",
            pending: "/pending",
            success: "/success"
        },
        auto_return: 'approved',
        binary_mode: true,

    }

    mercadopago.preferences.create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }))
})

module.exports= mercadoPagoRouter
