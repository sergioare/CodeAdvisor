import axios from "axios";

export const sendProfileDetails = (data,uid)=>{
     
       
        const ProfileData =  axios.post(`http://localhost:3002/Clients/${uid}`, data)
        .then(()=>console.log('Please, verify email'))
        .catch(err=>console.log(err));

        return ProfileData

}