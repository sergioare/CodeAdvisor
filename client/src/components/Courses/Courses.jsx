import Navbar from "../Navbar/Navbar";
import "./Courses.scss"
import notFound from "../../assets/Page_in_Mante.png"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTechSkills } from "../../redux/actions/actions";


const Courses = () => {
  const dispatch = useDispatch();
  const techSkills = useSelector(state => state.techSkills);

  useEffect(() => {
    dispatch(getTechSkills())
  }, [dispatch])
  return (
    <div>
      <Navbar />
      {/* <div className="imgConteiner">
        <img className="imgNotFound" src={notFound} alt="notFound" />
      </div> */}
      <div className="containerTech">
        {techSkills?.map((skill) => {
          return <div className="techs">
            <h2 key={skill.id}> {skill.id}</h2>
            <h4>{skill.Name}</h4>
            <img src={skill.Image} alt='imageTechSkills' />
            {/* <p>{skill.Description}</p> */}
          </div>
        })
        }
      </div>
    </div >
  )
}

export default Courses;