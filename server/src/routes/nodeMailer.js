const { Router } = require('express');
const nodemailer = require("nodemailer");
const nodeMailerRoutes = Router()

nodeMailerRoutes.post('/',  (req, res) => {

    const data = req.body

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: 'david.morales.developer.01@gmail.com' , 
          pass: 'rghadxhawzweepph', 
        },
      });

      
      let mailInfo =  {
        from: data.email, 
        to: "david.morales.developer.01@gmail.com", 
        subject: `Contact me by${data.fullName}` , // Subject line
        text: data.mensaje, // plain text body
        
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