import React from 'react';
// import { reviews } from './data';
import StarRating from '../StarRating/StarRating';
import './ReviewsFinish.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions/actions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ReviewsFinish = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
  console.log("El error es de Tereeeeeeeeeeeeeeeeeeeeeeeeeee, Aqui en ReviewsFInish")
    dispatch(getDetail(id));
  }, [dispatch, id]);

  // const reviewsByUsers = useSelector(state => state.advisorDetail.Reviews)
  const reviewsByUsers = useSelector(state => state.advisorDetail.Reviwers)


  return (
    <div className='ContainRevFin'>
      <div className='RevFin'>
        {Array.isArray(reviewsByUsers) && reviewsByUsers?.map((review, index) => {
          return (
            <div className='cardRevFin' key={index}>
              <div className='HeadRevFin'>
                <img src={review.Img} alt='una_imagen' />
                <h2>{review.Name}</h2>
              </div>
              <p>{review.Reviwer}</p>
              <span>{<StarRating rating={review.score} />}</span>
              {/* <span>{review.score}</span> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}
