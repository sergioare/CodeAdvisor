import React from 'react'
import './Commercial.scss'

export const Commercial = ({ isSidebarOpen }) => {
  return (
    <div className={`ContPrincipal ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className='textCont'>
        <h1>Teaching in the internet age </h1>
        <h1>means we must teach <p>tomorrow's</p></h1>
        <h1><span>skills today</span></h1>
      </div>
      <div className='buttonCont'>
        <button>Join as Advisor</button>
        <button>Join as Student</button>
      </div>
      
    </div>
  )
}
