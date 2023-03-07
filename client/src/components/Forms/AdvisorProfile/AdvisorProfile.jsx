import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './AdvisorProfile.scss'
import { useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { getTechSkills } from "../../../redux/actions/actions";
import Swal from 'sweetalert2'
import { getAuth } from "firebase/auth";
import { createAdvisorFromClient } from "../../../handlers/createAdvisorFromClient";
import { UploadFile } from "../../../firebase";
let auth_token;
let country_list = [];


const AdvisorProfile = () => {
  const techSkills = useSelector(state=> state.techSkills)
  const [phone, setPhone] = useState("");
  const [responseServer, setResponseServer] = useState(null);
  const [countrySelected, setcountrySelected] = useState("");
  const [techSelected, setTechSelected] = useState([]);
  const navigate = useNavigate();
  const [imageCloud, setImageCloud] = useState("");
  const TechSkills = [{name:'PY'}, {name:'HTML'},{name:'C#'},{name:'C++'},{name:'CSS'},{name:'JS'},{name:'Java'},{name:'PHP'},{name:'Ruby'}];
  const Specialties = [{name: 'Freelancer'}, {name: 'Advisor'}]
  const [CV_Cloud, setCV_Cloud] = useState("");
  const [Specialty, setSpecialty] = useState([]);
  

  const showAlert = ()=>{
    Swal.fire({
    title: "Your profile was updated successfuly",
    icon: "success",
    footer: "<b>Continue enjoy our services</b>"
})
}

  const handleImage = async (event) => {
    const file = event.target.files[0];
    const Uid = getAuth().currentUser.uid;
    
    const Image = await UploadFile(file,Uid)
    setImageCloud(Image)
  };

  const handleCV = async (event) => {
    const file = event.target.files[0];
    const Uid = getAuth().currentUser.uid;
    
    const CV = await UploadFile(file,'CV-'+Uid)
    setCV_Cloud(CV)
  };

 
  const get_country = async () => {
    const conf = {
      headers: {
        Accept: "application/json",
        "api-token":
          "vBBL5ivC62ccnb9Iy7K6llSijH8ahji5nd9-SIWGDuEnIZAQ2MZrDApxfZ3ygZneUyQ",
        "user-email": "sergioarevalo301@gmail.com",
      },
    };

    await axios
      .get("https://www.universal-tutorial.com/api/getaccesstoken", conf)
      .then((res) => (auth_token = res.data.auth_token))

    await axios
      .get("https://www.universal-tutorial.com/api/countries", {
        headers: {
          Authorization: `Bearer ${auth_token}`,
          Accept: "application/json",
        },
      })
      .then((res) => (country_list = res.data))

      
  };

  
  useEffect(() => {
    get_country();
    //getTechSkills();
  }, []);


  return (
    

      <div className='advisorProfile'>
        

        <Formik
          initialValues={{
            About: "",
            Img: "",
            Residence: "",
            Price: '0',
            Specialty:"",
            Contact: "",
            portfolio: "",
            TechSkills:[],
            cv:"",
          }}
          onSubmit={(values) => {
            const Profile = getAuth();
            const Uid = Profile.currentUser.uid;
            
            values.Contact = phone;
            values.TechSkills= [...techSelected]
            Profile.currentUser.providerData[0].providerId  == 'google.com' ?  
            values.Img = Profile.currentUser.photoURL : 
            values.Img = imageCloud ;
            values.cv = CV_Cloud;
            values.Price = parseInt(values.Price)
            values.Specialty = Specialty
            // Envío de datos a la DB, creacion de nuevo Advisor 
            createAdvisorFromClient(values,Uid)
          }}
          
        >
          {({
            errors,
            touched,
            handleChange,
            values,
           
          }) => (
            <Form >
              <h1>Complete Advisor Profile</h1>
              <div className="residence">
                <Field
                  as="select"
                  name="Residence"
                  id="Residence"
                  onChange={(e) => {
                    setcountrySelected(e.target.value);
                    handleChange(e);
                  }}
                  // error={errors.town}
                  value={values.Residence}
                  className='input'
                >
                  <option>Select your Country...</option>
                  {country_list.map((country) => {
                    return (
                      <option
                        key={country.country_short_name}
                        value={country.country_name}
                      >
                        {country.country_name}
                      </option>
                    );
                  })}
                </Field>
              </div>

              
              <div className='phone'>
                  <h6>Enter your contact number</h6>
                    <PhoneInput
                      initialCountry="ar"
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      className="wrapper-phone"
                    />

                  {errors.Contact &&
                    touched.Contact(<p style={{ color: "red" }}>{errors.Contact}</p>)}
              </div>


             
             <div className="portfolio">
                  <h6>Insert your portfolio URL</h6>
                  <Field
                    type="text"
                    placeholder="URL portfolio"
                    name="portfolio"
                    id="portfolio"
                    onChange={handleChange}
                    value={values.portfolio}
                    className='input'
                  />
             </div>

             
                            
              <div className="price">
                  <h6>Set your price per hour</h6>
                  <Field
                    type="text"
                    placeholder="USD/hr"
                    name="Price"
                    id="Price"
                    onChange={handleChange}
                    value={values.Price}
                    className='input'
                  />
              </div>

              <div className="specialty">
                  <Field
                    as="select"
                    name="Specialty"
                    id="Specialty"
                    placeholder="Select your specialty"
                    onChange={(e) => {
                      handleChange(e);
                      setSpecialty([...Specialty,e.target.value]);
                    }}
                    value={values.Specialty}
                    className='input'
                  >
                    <option>Select your Specialties</option>
                    {Specialties.map( tech => { 
                      return (
                        <option key={tech.name} value={tech.name}>
                          {tech.name}
                        </option>
                      );
                    })}
                  </Field>
              </div>
              
              <div className="second-part">
                  <div className="tech">
                  <Field
                    as="select"
                    name="TechSkills"
                    id="professionselect"
                    placeholder="Select your Profession..."
                    onChange={(e) => {
                      handleChange(e);
                      setTechSelected([...techSelected,e.target.value]);
                    }}
                    value={values.TechSkills}
                    className='input'
                  >
                    <option>Select your Programming Language...</option>
                    {TechSkills.map( tech => { 
                      return (
                        <option key={tech.name} value={tech.name}>
                          {tech.name}
                        </option>
                      );
                    })}
                  </Field>
                </div>

                  <div className="imgProf">
                      <h6 >Upload your profile image</h6>
                      <input
                            type="file"
                            name="photo"
                            id="photo"
                            className="shadow"
                            onChange={handleImage}
                        />
                  </div>
                  <div className="about">
                      <h6 className='h6form'>Tell people about your work</h6>
                      <Field
                        as="textarea"
                        name="About"
                        onChange={handleChange}
                        placeholder="Write a brief description about your work..."
                        className='textarea'
                        value={values.About}
                      />
                  </div>

                    
                  <div className="cv">
                      <h6 >Upload your Curriculum vitae</h6>
                      <input
                            type="file"
                            name="cv"
                            id="cv"
                            className="shadow"
                            onChange={handleCV}
                        />
                  </div>
                  <button className='btn' type="submit" onClick={showAlert}>
                    Send
                  </button>
              </div>
              
             

              {responseServer && <div>{responseServer}</div>}
            </Form>
          )}
        </Formik>
      </div>
   
  );
};
export default AdvisorProfile;
