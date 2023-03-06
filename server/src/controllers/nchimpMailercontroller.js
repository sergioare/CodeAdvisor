const mailchimp = require("@mailchimp/mailchimp_marketing");
require('dotenv').config()
const passwor= process.env.MAILCHIMP_API_KEY

mailchimp.setConfig({
    apiKey: passwor,
    server: "us11",
  });

//al ejecutar run , trae el id de mi lista para añadir o ver la lista de mis menbers
const run = async () => {
  const response = await mailchimp.lists.getAllLists();
  console.log(response);
};

// run();



const listMembers = async (req, res, next) => {    
    try {
        //trae todos los que esta subcritos
        const response = await mailchimp.lists.getListMembersInfo("0ad7923748");
      console.log(response);  
       
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
  
const addSuscriber = async (req, res, next) => {    
    try {
        //subcribe a una persona nueba 
        const data = req.body
        const response = await mailchimp.lists.addListMember("0ad7923748", {
            email_address: data.email_address,
            full_name: data.full_name,
            status: "subscribed"

          });
          console.log(response);
       
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
      

      //finciona agregar a un contacto
    


    module.exports = { addSuscriber, listMembers}