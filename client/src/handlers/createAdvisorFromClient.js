import axios from "axios";

export const createAdvisorFromClient = (data,uid)=>{
     
       
        const ProfileData =  axios.post(`https://code-advisor-xi.vercel.app/Advisors/Create/${uid}`, data)
        .then(()=>console.log('Parameters added'))
        .catch(err=>console.log(err));

        return ProfileData

}