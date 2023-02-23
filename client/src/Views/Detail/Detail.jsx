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
  // console.log(detail);
  return (
    <div className='DetailContainer'>
      <h1>Profile</h1>
      <p> {detail.Specialty?.length > 1 ? detail.Specialty.join(', ') : detail.Specialty}</p>

      <div className='Detail'>
        <p className='About'> About me: <p className='TextAbout'>{detail.About}</p> 
        <Link to= {`/payment/${detail.id}`}><button className='ButtonSchedule'>Schedule Advice</button></Link></p>
        
        
        <img src={detail.Img} alt='imageAdvisor' />
        <div className='DataContent'>
          <p className='DetailTitle'>Details</p>
          <p className='TitlesPurple'> Name: <p>{detail.Firstname + ' ' + detail.Lastname} </p></p>
          <p className='TitlesPurple'>Conutry: <p>{detail.Residence}</p></p>
          <p className='TitlesPurple'>Languages: <p>{detail.Language?.length > 1 ? detail.Language.join(', ') : detail.Language}</p></p>
          <p className='TitlesPurple'>Tech Skills: <p>{detail.TechSkills?.join(', ')}</p></p>
          <p className='TitlesPurple'>Score: <span>⭐{detail.Score}</span></p>
          <p className='TitlesPurple'>Price: <span>${detail.Price} / hr</span></p>

        </div>
      </div>
      {/* <div> */}
      {/* <>ENLAZAR LOS REVIEWS DEL ASESOR</> */}
      {/* </div> */}
      <Link to='/home'><button>Back Home</button></Link>
    </div>
  )
}
