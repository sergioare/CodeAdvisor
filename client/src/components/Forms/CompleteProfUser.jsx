import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { getAuth } from "firebase/auth";
import { UploadFile } from "../../firebase";
import { PhoneInput } from "react-international-phone";

import Swal from 'sweetalert2'

const CompleteProfUser = () => {
    const [imageCloud, setImageCloud] = useState("");
    const [phone, setPhone] = useState("");


    const showAlert = ()=>{
        Swal.fire({
        title: "Your profile was created successfuly",
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

    return (
        <div className='userProfile'>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    contact: "",
                    about: "",
                    img:""
                
                }}
                onSubmit={(values) => {
                    const Profile = getAuth();
                    
                    Profile.currentUser.providerData[0].providerId  == 'google.com' 
                        ? values.img = Profile.currentUser.photoURL 
                        : values.img = imageCloud 
                    values.contact = phone;
                    
                }}
                >
                    {({
                        errors,
                        touched,
                        handleChange,
                        values,
                    
                    }) => (
                        <Form >
                            <h1>Complete User Profile</h1>

                            <h6>First Name</h6>
                            <Field
                                type="text"
                                placeholder="First name"
                                name="firstname"
                                id="firstname"
                                onChange={handleChange}
                                value={values.firstname}
                                className='field'
                            />
                            {errors.firstname &&
                                touched.firstname(<p style={{ color: "red" }}>{errors.firstname}</p>)}
                            
                            <h6>Last Name</h6>
                            <Field
                                type="text"
                                placeholder="Last name"
                                name="lastname"
                                id="lastname"
                                onChange={handleChange}
                                value={values.lastname}
                                className='field'
                            />
                            {errors.lastname &&
                                touched.lastname(<p style={{ color: "red" }}>{errors.lastname}</p>)}

                            <h6>Enter your contact number</h6>
                            <PhoneInput
                            initialCountry="ar"
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            className='input'
                            />
                                
                            
                            <h6>Tell people about yourself</h6>
                            <Field
                                as="textarea"
                                name="about"
                                onChange={handleChange}
                                placeholder="Write a brief description about yourself..."
                                className='textarea'
                                value={values.about}
                            />

                            <h6 >Upload your profile image</h6>
                            <input
                                    type="file"
                                    name="photo"
                                    id="photo"
                                    className="input"
                                    onChange={handleImage}
                                />
                            
                            <button className='btn' type="submit" onClick={showAlert}>
                                Send
                            </button>

                        </Form>
                        )}

          </Formik>
        </div>
    );
};

export default CompleteProfUser;