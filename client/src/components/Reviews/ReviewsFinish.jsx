import React from 'react';
import { reviews } from './data';
import StarRating from '../StarRating/StarRating';
import './ReviewsFinish.scss'

export const ReviewsFinish = () => {
  return (
    <div className='ContainRevFin'>
      <div className='RevFin'>
        {reviews?.map((review) => {
          return (
            <div className='cardRevFin' key={review.id}>
              <div className='HeadRevFin'>
                <img src={review.Img} alt='una_imagen' />
                <h2>{review.Name}</h2>
              </div>
              <p>{review.Reviwer}</p>
              <span>{<StarRating rating={review.score} />}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
