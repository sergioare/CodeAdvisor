const { Router } = require('express');
const { mercadopago } = require('../configMercadoPago')
const mercadoPagoRouter = Router()

mercadoPagoRouter.post('/', (req, res) => {
    // const prod = req.body

    let preference = {
        Items: [{
            id: 4,
            title: 'title', //prod.title
            currency_id: "MXN",
            picture_url: 'image.gpg', //prod.image
            description: 'soy description', //prod.description
            category_id: 'art',
            quantity: 2,
            unit_price: 12,//prod.price
        }
        ],
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
