import axios from "axios";

export const createUser = (data,uid)=>{
     
       
        const UserData =  axios.post(`http://localhost:3002/Advisors/Create/${uid}`, data)
        .then(()=>console.log('Parameters added'))
        .catch(err=>console.log(err));

        return UserData

}