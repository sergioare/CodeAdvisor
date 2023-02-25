const mercadopago = require('mercadopago');
require('dotenv').config()

mercadopago.configure({access_token : process.env.MERCADOPAGO_KEY})

module.exports ={ mercadopago}