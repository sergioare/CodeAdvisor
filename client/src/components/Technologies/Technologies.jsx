import Navbar from "../Navbar/Navbar";
import "./Technologies.scss"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTechSkills } from "../../redux/actions/actions";


const Technologies = () => {
  const dispatch = useDispatch();
  const techSkills = useSelector(state => state.techSkills);

  useEffect(() => {
    dispatch(getTechSkills())
  }, [dispatch])
  return (
    <div>
      <Navbar />
      <div className="containerTech">
        {techSkills?.map((skill) => {
          return <div className="techs" key={skill.id}>
            <h2 > {skill.id}</h2>
            <img src={skill.Image} alt='imageTechSkills' />
          </div>
        })
        }
      </div>
    </div >
  )
}

export default Technologies;