import React, { useEffect } from 'react';
import './Detail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getDetail } from '../../redux/actions/actions';
import StarRating from '../../components/StarRating/StarRating';

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
      {/* <h1>Profile</h1> */}
      <h1>{detail.Firstname + ' ' + detail.Lastname}</h1>
      <p> {detail.Specialty/*?.length > 1 ? detail.Specialty.join(' / ') : detail.Specialty*/}</p>

      <div className='Detail'>
        <h4 className='About'> About me: <p className='TextAbout'>{detail.About}</p></h4>
        <img src={detail.Img} alt='imageAdvisor' />
        <div className='DataContent'>
<<<<<<< HEAD
          <p className='DetailTitle'>Details</p>
          <p className='TitlesPurple'> Name: <p>{detail.Firstname + ' ' + detail.Lastname} </p></p>
          <p className='TitlesPurple'>Conutry: <p>{detail.Residence}</p></p>
          <p className='TitlesPurple'>Languages: <p>{detail.Language?.length > 1 ? detail.Language.join(', ') : detail.Language}</p></p>
          <p className='TitlesPurple'>Tech Skills: <p>{detail.TechSkills?.join(', ')}</p></p>
          <p className='TitlesPurple'>Score: <span>⭐{detail.Score}</span></p>
          <p className='TitlesPurple'>Price: <span>${detail.Price} / hr</span></p>
=======
          {/* <p className='DetailTitle'>Details</p> */}
          {/* <p className='TitlesPurple'> Name: <p>{detail.Firstname + ' ' + detail.Lastname} </p></p> */}
          <h4 className='TitlesPurple'>Conutry: <p>{detail.Residence}</p></h4>
          <h4 className='TitlesPurple'>Languages: <p>{detail.Language/*?.length > 1 ? detail.Language.join(', ') : detail.Language*/}</p></h4> 
          <h4 className='TitlesPurple'>Tech Skills: <p>{detail.TechSkills?.join(', ')}</p></h4>
          <h4 className='TitlesPurple'>Score: <span>{<StarRating score={detail.Score} />}</span></h4>
          <h4 className='TitlesPurple'>Price: <span>${detail.Price} / hr</span></h4>
>>>>>>> f8b414d451d156bba69e4f1cf2bdc85e57c60449

        </div>
      </div>
      {/* <div> */}
      {/* <>ENLAZAR LOS REVIEWS DEL ASESOR</> */}
      {/* </div> */}
      <Link to='/home'><button>Back Home</button></Link>
    </div>
  )
}
