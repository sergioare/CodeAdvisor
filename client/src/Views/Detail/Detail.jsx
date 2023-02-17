import React, { useEffect } from 'react';
import './Detail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getDetail } from '../../redux/actions/actions';

export const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, id]);

  const detail = useSelector(state => state.advisorDetail)
  console.log(detail)
  return (
    <div className='DetailContainer'>
      <div className='Detail'>
        <h2>{detail.name}</h2>
        <img src={detail.image} alt='imageAdvisor' />
        <p>Tech Skills: {detail.techSkills?.join(', ')}</p>
        {/* <p>About: {detail.about}</p> */}
        <p>Languages: {detail.idiomaNativo}</p>
        <p>Ranking: {detail.ranking}</p>
        {/* <>ENLAZAR LOS REVIEWS DEL ASESOR</> */}
        <Link to='/home'><button>◀ Return</button></Link>
      </div>
    </div>
  )
}
