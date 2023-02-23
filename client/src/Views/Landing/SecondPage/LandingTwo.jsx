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

  const [numTarjetas, /*setNumTarjetas*/] = useState(3);
  const tarjetasMostradas = techSkills.slice(0, numTarjetas);
  return (
    <div className='landingTwo'>
      <div className='text'>
        <h1>{textLandingTwo.h1}</h1>
        <p>{textLandingTwo.p1}</p>
      </div>

      <div className="containerTech">
        {tarjetasMostradas.map((tarjeta) => {
          return <div className="techs">
            <h2 key={tarjeta.id}> {tarjeta.id}</h2>
            <img src={tarjeta.Image} alt='imageTechSkills' />
          </div>
        })}
        {/* AQUI VAN LAS CARDS */}
      </div>
    </div>
  );
};

export default LandingTwo;