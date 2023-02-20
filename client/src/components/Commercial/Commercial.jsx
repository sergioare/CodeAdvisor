import React from 'react'
import { Link } from 'react-router-dom'
import './Commercial.scss'

export const Commercial = () => {




  return (
    <div className='ContPrincipal'>
      <div className='textCont'>
        <h1>Teaching in the internet age </h1>
        <h1>means we must teach <p>tomorrow's</p></h1>
        <h1><span>skills today</span></h1>
      </div>
      <div className='buttonCont'>
        <Link to='/register' key='Registerbutton'>
          <button>Join as Advisor</button>
          <button>Join as Student</button>
        </Link>
      </div>
      
    </div>
  )
}
