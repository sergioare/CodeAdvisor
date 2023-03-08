import axios from "axios";
import { Ultimate } from "../Deploys";

export const sendProfileDetails = (data,uid)=>{
     
       
        const ProfileData =  axios.post(`${Ultimate}/Clients/${uid}`, data)
        .then(()=>console.log('Please, verify email'))
        .catch(err=>console.log(err));

        return ProfileData

}