import axios from "axios";
import { Ultimate } from "../Deploys";

export const createAdvisorFromClient = (data,uid)=>{
     
       
        const ProfileData =  axios.post(`${Ultimate}/Advisors/Create/${uid}`, data)
        .then(()=>console.log('Parameters added'))
        .catch(err=>console.log(err));

        return ProfileData

}