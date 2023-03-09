import React from 'react';
import { Link } from 'react-router-dom'
import './Commercial.scss';
import Swal from 'sweetalert2';


export const Commercial = ({ isSidebarOpen, setIsAdvisors}) => {

  const showAlert = () => {
    Swal.fire({
      title: 'Complete your Profile!',
      icon: 'success',
      confirmButtonText: 'OK',
      footer: "<b>Continue enjoy our services</b>",
    })
  }
  const handlerAdvisor =()=>{
    // setIsAdvisors(true)
    showAlert()
  }

  const handlerAdvisorFalse =()=>{
    // setIsAdvisors(false)
    showAlert()
  }

  return (
    <div className={`ContPrincipal ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* <div className='ContPrincipal'> */}
        
      <div className='textCont'>
        <h1>Teaching in the internet age </h1>
        <h1>means we must teach <p>tomorrow's</p></h1>
        <h1><span>skills today</span></h1>
    
      </div>
      <div className='buttonCont'>
          <button onClick={handlerAdvisor} className='btn-one'>Join as Advisor</button>
          <button onClick={handlerAdvisorFalse}>Join as Student</button>
      </div>
      <img src="https://images.pexels.com/photos/4144100/pexels-photo-4144100.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Online Class" className='img-left' />
        <img src="https://images.pexels.com/photos/5053732/pexels-photo-5053732.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Online Class"  className='img-right'/>
        <div className='arrow-left'></div>
        <div className='arrow-bot'></div>
    </div>
  )
}
