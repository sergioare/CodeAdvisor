const { Router } = require('express');
const mailchimp = require("@mailchimp/mailchimp_marketing");
const { addSuscriber, listMembers} = require('../controllers/nchimpMailercontroller')
const chimpMailerRoutes = Router()

// mailchimp.setConfig({
//     apiKey: "fdd331113a2c27813df88f87899158e7-us14",
//     server: "us14",
//   });

chimpMailerRoutes.get('/',listMembers )
chimpMailerRoutes.post('/',addSuscriber )

module.exports= chimpMailerRoutes 