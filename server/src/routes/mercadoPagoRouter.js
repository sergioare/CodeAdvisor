const { Router } = require('express');
const { mercadopago } = require('../configMercadoPago')
const mercadoPagoRouter = Router()

mercadoPagoRouter.post('/', (req, res) => {
    // const producto = req.body
    

    let preference = {
        Items: [{
            id: 4,
            title: 'juguete', 
            currency_id: "MXN",
            description: 'soy description',
            category_id: 'art', 
            quantity: 1, 
            unit_price: 10,
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
