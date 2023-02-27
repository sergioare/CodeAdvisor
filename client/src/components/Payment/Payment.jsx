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
import axios from "axios"

const Payment = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector(state => state.advisorDetail)
    
    const skillMap =  product.TechSkills
    console.log(skillMap)

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

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
const [skills, setSkills]=useState("")




//----------------------------Ruote to mercadoPAgo---------------------//
    const submitHandler = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3002/payment', prod)
            .then((res) =>
                (window.location.href = res.data.response.body.init_point))

                // axios.post('http://localhost:3002/data/XD', agenda)
                // .then((res)=>alert("info enviada"))
    };


    const prod = {
        // id: Math.floor(Math.random() * 999999),
        idAdvisor:product.id,
        idClient:"",
        Title: `${product.Firstname} counseling for ${count} hr`,
        Quantity: count,
        Price: product.Price
    };
    // console.log(prod)

//-----------------------Calendar-------------------//
    const [value, setValue] = useState(dayjs('2023-02-24'));
    const date = value.$d.toString().split(" ")
    const dateLong = (` ${date[1]} ${date[2]} ${date[3]}`)
    const time = `${date[4]} hrs`

    // const agenda ={
    //     date: dateLong,
    //     time:time
    // }


    return (
        <div className='PaymentContainer'>
            <header className='Header'>

            <h1>Schedule Advice</h1>
            <h2 className='TitlesPurple'> <p>{product.Firstname + ' ' + product.Lastname} </p></h2>

            </header>
            {/* <p> {detail.Specialty?.length > 1 ? detail.Specialty.join(', ') : detail.Specialty}</p> */}
            <div className='PaymentDetail'>
                {/* <img src={prod.Img} alt='imageAdvisor' /> */}

                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Select Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </LocalizationProvider>

                    <div className='HoursContent'>
                        <p> Chose number of hours</p>
                        <div>
                            <button className='ButtonCounter' onClick={decrease} disabled={count <= 1}>-</button>
                            <span className='Counter'>{count}</span> <span>hrs</span>
                            <button className='ButtonCounter' onClick={increase}>+</button>
                        </div>
                    </div>

                    <div >
                <label>Tech Skill: </label>
                <select value={skills} onChange={(e) => setSkills(e.target.value)}>
                    {skillMap.map((ski)=>(
                    <option key={ski} value={ski}>
                        {ski}
                    </option>

                    ))}
                </select>

                </div>

                    {/* <div className='HoursContent'>
                        <p> Dates not available </p>
                    </div> */}

                </div>

                <div className='PaymentContent'>
                    <p className='DetailTitle'> Confirm Details</p>
                    <div className='DetailBorder'>
                    <span className='Price'>Tech Skill: <span className='Numbers'>{skills}</span></span>

                    <span className='Price'>Price: <span className='Numbers'>${product.Price}.00 / hr</span></span>
                    {/* <div>
                        <button className='ButtonCounter' onClick={decrease} disabled={count <= 1}>-</button>
                        <span className='Counter'>{count}</span> <span>hrs</span>
                        <button className='ButtonCounter' onClick={increase}>+</button>
                    </div> */}
                    <p>Date: {dateLong}</p>
                    <p>Time: {time}</p>
                    <span className='TotalPrice'>Total: <span className='Numbers'> ${product.Price * count}.00 </span></span>
                    </div>

                    <button className='buttonStandard'
                        onClick={submitHandler} >
                        Go to Pay
                    </button>
                </div>
            </div>

            <Link to='/home'><button className='buttonStandard'>Back Home</button></Link>
        </div>
    )
}
export default Payment;
