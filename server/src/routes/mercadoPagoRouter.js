const { Router } = require('express');
const { mercadopago } = require('../configMercadoPago')
const mercadoPagoRouter = Router()

mercadoPagoRouter.post('/', (req, res) => {
    const prod = req.body
    

    let preference = {
        Items: [{
            id: 4,
            title: prod.name, //prod.name
            currency_id: "MXN",
            description: 'soy description',
            category_id: 'art', 
            quantity: prod.quantity, 
            unit_price: prod.name,
        }
        ],
        back_urls: {
            failure: "/failure",
            pending: "/pending",
            success: "/succes"
        },
        auto_return: 'approved',
        binary_mode: true,

    }
    //.redirect(response.body.init_point)

    mercadopago.preferences.create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }))
})

module.exports= mercadoPagoRouter
