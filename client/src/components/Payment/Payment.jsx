import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import React, { useEffect, useState } from 'react';
import './Payment.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getDetail } from '../../redux/actions/actions';
import { getDates } from '../../redux/actions/actions';
import booking from "../../assets/booking.png"
import axios from "axios"
// import { getAuth } from 'firebase/auth'

// const auth = getAuth();
// const idClient = auth.currentUser.reloadUserInfo.localId
// console.log(idClient)


const Payment = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector(state => state.advisorDetail)
    const datesInDb = useSelector(state => state.dates)
    // console.log(datesInDb.length)

    
    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getDates());
    }, [dispatch, id,]);

    //----------------Counter----------------------//

    const [count, setCount] = useState(1)

    const decrease = (event) => {
        event.preventDefault();
        setCount(count - 1);
    }
    const increase = (event) => {
        event.preventDefault();
        setCount(count + 1);
    }

    //------------------TechSkills---------------//
    const [skills, setSkills] = useState("");

    const tskill = product.TechSkills
    // console.log(tskill)


    //----------------------------Ruote to mercadoPAgo---------------------//
    const submitHandler = (event) => {
        event.preventDefault()
        axios.post('https://code-advisor-xi.vercel.app/payment', prod)
            .then((res) =>
                (window.location.href = res.data.response.body.init_point));

        axios.post('http://localhost:3002/data/XD', agenda)
            // .then(res => alert("date Send"))
    };


    const prod = {
        
        idAdvisor: product.id,
        Title: `${product.Firstname} counseling for ${count} hr`,
        Quantity: count,
        Price: product.Price
    };


    //-----------------------Calendar-------------------//
    const [value, setValue] = useState(dayjs('2023-02-24'));
    const date = value.$d.toString().split(" ")
    const dateLong = (` ${date[1]} ${date[2]} ${date[3]}`)
    const time = `${date[4]} hrs`

    const agenda = {
        idAdvisor: product.id,
        date: dateLong,
        time: time,
        // idClient: idClient,
    }
    // console.log(agenda)



    if (datesInDb.length !== 0) {
        let searchDate = datesInDb.filter((d) => d.data.date === dateLong)
        let searchTime = datesInDb.filter((t) => t.data.time === time)

        if (searchDate.length > 0 && searchTime.length > 0) { alert("Time not available choose another one") }
    }

    return (
        <div className='PaymentContainer'>
            <header className='Header'>
                <h1>Book your meeting</h1>
            </header>

            <div className='PaymentDetail'>
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            className='Picker'
                            renderInput={(props) => <TextField {...props} />}

                            label=<h2> Select Date </h2>
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </LocalizationProvider>

                    <div className='LeftContent'>
                        <h2> Chose number of hours</h2>
                        <div>
                            <button className='ButtonCounter' onClick={decrease} disabled={count <= 1}>-</button>
                            <span className='Counter'>{count}</span> <span className='Counter'>hrs</span>
                            <button className='ButtonCounter' onClick={increase}>+</button>
                        </div>
                    </div>

                    <div className='LeftContent'>
                        <h2>Tech Skill: </h2>
                        <select className='option' value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                        >
                            {tskill.map((ski, index) => (
                                <option key={index} value={ski}>
                                    {ski}
                                </option>)

                            )}
                        </select>

                    </div>

                    <div className='LeftContent'>
                        <h2> Dates not available </h2>
                        {datesInDb.map((d, index) => (
                            <span key={index}>{d.data.date} {d.data.time}</span>

                        ))}

                    </div>

                </div>

                <img className='img' src={booking} alt="booking" />

                <div className='PaymentContent1'>
                    <div className='PaymentContent2'>
                        <div className='DetailBorder'>
                            <h2> Advisor: </h2>
                            <p>{product.Firstname + ' ' + product.Lastname} </p>
                            <h2>Tech Skill: </h2>
                            <p className=''>{skills}</p>
                            <h2>Price: </h2>
                            <p className='Numbers'>${product.Price}.00 / hr</p>

                        </div>
                        <div className='DetailBorder'>

                            <h2>Date:</h2>
                            <p>{dateLong}</p>
                            <h2>Time:</h2>
                            <p>{time}</p>
                            <h2>Hours:</h2>
                            <p>{count}</p>
                        </div>
                    </div>


                    <h2> Total: <span> ${product.Price * count}.00 </span> </h2>

                    <button className='buttonStandard'
                        onClick={submitHandler} >
                        add to cart <i class="fa-solid fa-cart-shopping"></i>

                    </button>
                </div>
            </div>

            <Link to='/home'><button className='buttonStandard'>Back Home</button></Link>
        </div>
    )
}
export default Payment;
