const { Router } = require('express');
const mailchimp = require("@mailchimp/mailchimp_marketing");
const { addSuscriber, listMembers} = require('../controllers/nchimpMailercontroller')
const chimpMailerRoutes = Router()


chimpMailerRoutes.get('/',listMembers )
chimpMailerRoutes.post('/',addSuscriber )

module.exports= chimpMailerRoutes 