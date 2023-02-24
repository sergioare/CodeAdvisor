const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: "fdd331113a2c27813df88f87899158e7-us14",
    server: "us14",
  });


const listMembers = async (req, res, next) => {    
    try {
        //trae todos los que esta subcritos
        const response = await mailchimp.lists.getListMembersInfo("cfd495c9d2");
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
        const response = await mailchimp.lists.addListMember("cfd495c9d2", {
            email_address: data.email,
            full_name: data.name,
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