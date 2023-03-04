import { textLandingTwo } from "./data";
import './LandingTwo.scss';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getTechSkills } from "../../../redux/actions/actions";

const LandingTwo = () => {
  const dispatch = useDispatch();
  const techSkills = useSelector(state => state.techSkills);

  useEffect(() => {
    dispatch(getTechSkills())
  }, [dispatch])


  const [numTarjetas, /*setNumTarjetas*/] = useState(7);
  const tarjetasMostradas = techSkills.slice(4, numTarjetas);

  return (
    <div className='landingTwo'>
      <div className='text'>
        <h1>{textLandingTwo.h1}</h1>
        <p>{textLandingTwo.p1}</p>
      </div>

      <div className="containerTech">
        {tarjetasMostradas.map((tarjeta) => {
          return <div className="techs" key={tarjeta.id}>
            <img src={tarjeta.Image} alt='imageTechSkills' />
            {/* <h2 > {tarjeta.id}</h2> */}
          </div>
        })}
      </div>
      
        <h4>Find out how our latest courses can help you...</h4>
      
    </div>
  );
};

export default LandingTwo;