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

  const showAlert = ()=>{
    Swal.fire({
    title: "Your profile was created successfuly",
    icon: "success",
    footer: "<b>Continue enjoy our services</b>"
})
}
  const handleImage = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    try {
      formData.append("file", file);
      formData.append("upload_preset", "zdsy8b2u");
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/ddqsqst5a/image/upload",
          formData
        )
        .then((res) => {
          console.log(res.data.url);
          setImageCloud(res.data.url);
        });
    } catch (error) {
      console.log(error);
    }
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
    getTechSkills();
  }, []);


  return (
    

      <div className='containerform'>
        <h1 className='h1form'>Complete Advisor Profile</h1>

        <Formik
          initialValues={{
            description: "",
            photo: "",
            country: "",
            state: "",
            town: "",
            contact: "",
            portfolio: "",
            techSkills:[],
            cv:"",
          }}
          onSubmit={(values) => {
            values.contact = phone;
            values.techSkills.push(techSelected);
            values.photo = imageCloud;
          
            axios
              .post(
                "urlpost",
                values
              )
              .then((response) => {
                setResponseServer(response.data);
                // navigate("/professionalDashboard");
               showAlert();
              })
              .catch((error) => {
                setResponseServer(error.message);
              });
          }}
        >
          {({
            errors,
            touched,
            handleChange,
            values,
           
          }) => (
            <Form className='Formprofessional'>
              <Field
                as="select"
                name="country"
                id="country"
                onChange={(e) => {
                  setcountrySelected(e.target.value);
                  handleChange(e);
                }}
                // error={errors.town}
                value={values.country}
                className='fieldTown'
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

              
              <h6 className='h6form'>Enter your contact number</h6>
              <div className='divphone'>
                <PhoneInput
                  initialCountry="ar"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </div>

              {errors.contact &&
                touched.contact(<p style={{ color: "red" }}>{errors.contact}</p>)}

             
              <h6 className='h6form'>Insert your portfolio URL</h6>
              <Field
                type="text"
                placeholder="URL portfolio"
                name="portfolio"
                id="portfolio"
                onChange={handleChange}
                value={values.portfolio}
                className='field'
              />
         
              <Field
                as="select"
                name="professionselect"
                id="professionselect"
                placeholder="Select your Profession..."
                onChange={(e) => {
                  handleChange(e);
                  techSelected(e.target.value);
                }}
                value={values.professionselect}
                className='fieldProf'
              >
                <option>Select your Programming Language...</option>
                {techSkills.map( tech => { 
                  return (
                    <option key={tech.id} value={tech.name}>
                      {tech.name}
                    </option>
                  );
                })}
              </Field>

              <h6 className='h6form'>Tell people about your work</h6>
              <Field
                as="textarea"
                name="description"
                onChange={handleChange}
                placeholder="Write a brief description about your work..."
                className='textareaform'
                value={values.description}
              />

              <h6 className='h6form'>Upload your profile image</h6>
              <Field
                type="file"
                name="photo"
                id="photo"
                onChange={handleImage}
                className='fieldImg'
              />
              {errors.image &&
                touched.image(<p style={{ color: "red" }}>{errors.image}</p>)}

              <button className='Buttonsend' type="submit">
                Send
              </button>

              {responseServer && <div>{responseServer}</div>}
            </Form>
          )}
        </Formik>
      </div>
   
  );
};
export default AdvisorProfile;
