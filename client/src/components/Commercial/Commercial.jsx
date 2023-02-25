import React from 'react';
import { Link } from 'react-router-dom'
import './Commercial.scss';
import Swal from 'sweetalert2';

export const Commercial = ({isSidebarOpen}) => {
  const showAlert = () => {
    Swal.fire({
      title: 'Sorry, We are working for you!',
      text: 'Do you want to continue',
      icon: 'warning',
      confirmButtonText: 'OK',
      footer: "<b>Continue enjoy our services</b>",
    })
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
        <Link to='/register' key='Registerbutton'>
          <button onClick={showAlert}>Join as Advisor</button>
          <button onClick={showAlert}>Join as Student</button>
        </Link>
      </div>

    </div>
  )
}
