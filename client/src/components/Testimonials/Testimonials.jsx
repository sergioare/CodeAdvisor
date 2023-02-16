import React from 'react'
import './Testimonials.scss'
import { students } from './data'

export const Testimonials = () => {
  return (
    <div className='ContainerTest'>
      <h1>Testimonials</h1>
      <h4>What our students say about us</h4>
      <div className='Testimonials'>
        {students?.map((student) => {
          return <>
            <div className='cardTest' key={student.id}>
              <div className='Head'>
                <img src={student.image} alt='' />
                <h2>{student.name}</h2>
              </div>
              <p>{student.testimonial}</p>
              <span>{student.ranking}</span>
            </div></>
        })}
      </div>
    </div>
  )
}
