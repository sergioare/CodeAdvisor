import axios from "axios";

export const sendProfileDetails = (data,uid)=>{
     
       
        const ProfileData =  axios.post(`https://deploy-server-870zumi3o-codigojaguar.vercel.app/Clients/${uid}`, data)
        .then(()=>console.log('Please, verify email'))
        .catch(err=>console.log(err));

        return ProfileData

}