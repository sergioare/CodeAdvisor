import React from 'react';
import './Testimonials.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../redux/actions/actions';
import { useEffect } from 'react';
import StarRating from '../StarRating/StarRating';

const Testimonials = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews);
  
  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])

  return (
    <div className='ContainerTest'>
      <h1>Testimonials</h1>
      <h4>What our students say about us</h4>
      <div className='Testimonials'>
        {reviews?.map((review) => {
          return (
            <div className='cardTest' key={review.id}>
              <div className='Head'>
                <img src={review.img || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'} alt='' />
                <h2>{review.name}</h2>
              </div>
              <p>{review.testimonial}</p>
              <span>{<StarRating rating={review.ranking} />}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials;