const { Router } = require('express');
const nodemailer = require("nodemailer");
const nodeMailerRoutes = Router()

nodeMailerRoutes.post('/',  (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'jody.ullrich2@ethereal.email' , // generated ethereal user
          pass: 'g78bwyGD57UnA2Wmt5', // generated ethereal password
        },
      });

      let mailInfo =  {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "david.morales.developer.01@gmail.com", // list of receivers
        subject: "Hello from codeAvisor", // Subject line
        text: "Hello world, this from node and nodemailer i take care of u <3", // plain text body
        
      };
      transporter.sendMail(mailInfo,(error, info)=>{

        if(error){
            res.status(500).send(error.message)
        }else{
            console.log('Email enviado!!')
            res.status(200).json(req.body)
        }

      })

})


module.exports= nodeMailerRoutes