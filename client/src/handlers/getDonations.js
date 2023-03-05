import axios from "axios";

export const getDonations = (data)=>{
     
       
        const Wallets = [];
        for (const key of data) {
            Wallets.push(`${key.date} : Thanks to ${key.from} for donate ${key.amount} BUSD`)
            
        }

        return Wallets

}