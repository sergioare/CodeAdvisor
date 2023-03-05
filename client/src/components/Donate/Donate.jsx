import "./Donate.scss"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from '../Navbar/Navbar'
import { getDonations } from "../../handlers/getDonations"

const Donate = () => {


const [donations , setDonations] = useState([]);



useEffect(() => {
    axios.get('https://bsc-payments-processor-pf.onrender.com/api/getWalletDonated/0xb6b75c21f8dbdc711d5a89f1ef3328ca6e47d274')
    .then(res=>{
        const donationWallets = getDonations(res.data);
        setDonations(donationWallets)
        })
    .catch(err=>alert(err))

  }, []);


    const submitHandler=(event)=>{
    event.preventDefault();
    console.log('Go to Binance')
    
    };

    return (
        <>
            <Navbar/>
        <div className="containerPrincipal" >
            <div className="bgpurple">
                <p className="textcontact">Donate Us</p>
                <p> We apreciate your willing to contribute for keep this page usefull for developers</p>
            </div>
            <div className="conteinerContact">
                <div className="contact">
                  
                    <div className="contactDetail">
                        {donations?.map(wallet=>{
                          return  <p> {wallet} </p>
                        })}
                    </div>
                </div>
                    <img className="img" 
                    src='https://firebasestorage.googleapis.com/v0/b/fb-2do.appspot.com/o/Binance-Smart-Chain-BSC.png?alt=media&token=49160342-3aee-483c-9a66-25199370de1d' 
                    alt="ImgBinance" />
                    <img className="img" 
                    src='data:image/png;base64,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' 
                    alt="Qr" />

            </div>
            <Link to='https://www.binance.com/'>
                Donate
            </Link>
            
            
        </div>
        </>

    )
}
export default Donate;