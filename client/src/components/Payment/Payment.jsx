// import * as React from 'react';
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

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);


    const [count, setCount] = useState(1)

    const decrease = (event) => {
        event.preventDefault();
        setCount(count - 1);
    }
    const increase = (event) => {
        event.preventDefault();
        setCount(count + 1);
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        axios.post('http://localhost:3002/payment', prod)
        .then((res) =>
                (window.location.href = res.data.response.body.init_point ))
        // console.log(input)
    };


    const prod = {
        id: Math.floor(Math.random() * 999999),
        Title: `${product.Firstname} counseling for ${count} hr`,
        Quantity: count,
        Price: product.Price
    };
    console.log(prod)

    const [value, setValue] = useState(dayjs('2023-02-24'));
    console.log(value)

    console.log(value.$d)

    return (
        <div className='PaymentContainer'>
            <h1>Schedule Advice</h1>
            <h2 className='TitlesPurple'> <p>{product.Firstname + ' ' + product.Lastname} </p></h2>
            {/* <p> {detail.Specialty?.length > 1 ? detail.Specialty.join(', ') : detail.Specialty}</p> */}
            <div className='PaymentDetail'>
                {/* <img src={prod.Img} alt='imageAdvisor' /> */}
                

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


                <div className='PaymentContent'>
                    <p className='DetailTitle'> Payment Details</p>
                    <p className='Price'>Price: <span className='Numbers'>${product.Price}.00 / hr</span></p>
                    <div>
                        <button className='ButtonCounter' onClick={decrease} disabled={count <= 1}>-</button>
                        <span className='Counter'>{count}</span> <span>hrs</span>
                        <button  className='ButtonCounter' onClick={increase}>+</button>
                    </div>
                    {/* <div>Date:{value.$d}</div>
                    <p>Time:</p> */}
                    <span className='TotalPrice'>Total: <span className='Numbers'> ${product.Price * count}.00 </span></span>
                    <button
                        className='buttonStandard'
                        onClick={submitHandler}
                        // onClick={() => {
                        //     axios
                        //     .post('http://localhost:3002/payment', prod)
                        //     .then(
                        //         (res) =>
                        //         (window.location.href = res.data.response.body.init_point)
                        //         )
                        //     }}
                            >
                        Pay</button>
                </div>
            </div>

            <Link to='/home'><button className='buttonStandard'>Back Home</button></Link>
        </div>
    )
}
export default Payment;

