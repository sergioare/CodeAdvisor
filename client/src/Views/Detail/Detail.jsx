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
console.log(detail);
  return (
    <div className='DetailContainer'>
      <div className='Detail'>
        <img src={detail.Img} alt='imageAdvisor' />
        <h2>{detail.Firstname + ' ' + detail.Lastname}</h2>
        <p>About: {detail.About}</p>
        <p>Specialty: {detail.Specialty?.length > 1 ? detail.Specialty.join(', ') : detail.Specialty}</p>
        <p>Tech Skills: {detail.TechSkills?.join(', ')}</p>
        <p>Languages: {detail.Language?.length > 1 ? detail.Language.join(', ') : detail.Language}</p>
        <p>Score: {detail.Score}</p>
        <Link to='/home'><button>Back Home</button></Link>
      </div>
      {/* <div> */}
      {/* <>ENLAZAR LOS REVIEWS DEL ASESOR</> */}
      {/* </div> */}
    </div>
  )
}
