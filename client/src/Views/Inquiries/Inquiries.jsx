import React, { useEffect } from 'react';
import { Field, Formik,Form } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Inquiries.scss'

const Inquiries = () => {
    const navigate = useNavigate();
    const[responseServer, setResponseServer] = useState(null);
    const questions=['Select your choice',
        'Help with my account',
        'Help raising a support ticket',
        'Work with CodeAdvisor',
        'Privacy questions',
        'Product advice',
        'Security & Compliance',
        'Other'
    ]

   
    const showAlert = ()=>{
        Swal.fire({
        title: "Your inquire was sent successfuly",
        icon: "success",
        html: "<p>Our team will contact you to <b>resolve</b> all your inquires</p>",
        footer: "<b>Please, check your email</b>"
    })
    }

    return (
        <div className='inquiries'>
        <h1 >General Inquiries</h1>
        <br/>
        <h2>¿Have a question for us?</h2>
        <Formik        
            initialValues={{
              name: "",
              email: "",
              question:"",
              message: ""
            }}
               validationSchema= {Yup.object({
                name: Yup
                    .string()
                    .label('Full name')
                    .required('Name is required')
                    .test('is-full-name', 'Please enter both your first and last name', function (value) {
                        const nameArr = value.split(" ");
                        return nameArr.length >= 2;}),

                email: Yup
                    .string()
                    .required('Please enter a valid email address')
                    .email('E-mail is required'),
                
                question: Yup
                    .string()
                    .oneOf(questions, 'The question you chose does not exist'),

                message: Yup
                    .string()
                    .min(2)
                    .required()
                
            })}
            onSubmit={ async (values) => {
                axios({
                method:'POST',
                url: 'ruta',
                data: values
                })
                .then((response) => {
                    console.log(response.data, "hola")
                    setResponseServer(response.data);
                    // setSubmitting(false);
                    showAlert()
                    navigate('/home')
              })
                .catch(error=>{
                    setResponseServer(error.message);
                })

            }
          }
          >
{({ errors, touched, handleBlur, handleChange, values, isSubmitting}) => (
                <Form>
                      
   
                        <label htmlFor='name'>Full Name</label>
                        
                        <Field
                            type='text'
                            name='name'
                            id='name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name} 
                            className='input'
                            />
                            {touched.name && errors.name &&(
                                <span className='error'>{errors.name}</span>
                            )}

                

   
                        <label htmlFor='email'>Your email address</label>
                        
                        <Field
                            type='email'
                            name='email'
                            id='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                            className='input'
                            />
                            {touched.email && errors.email &&(
                                <span className='error'>{errors.email}</span>
                            )}
                                
                

   
                        <label htmlFor='question'>¿How can we help you?</label>
                        
                        <Field
                            as='select'
                            name='question'
                            id='question'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.question} 
                            className='input'
                            >
                            {questions.map((question, index) => (
                            <option value={question} key={index}>{question}</option>
                            ))}    
                            </Field>
                            {touched.question && errors.question &&(
                                <span className='error'>{errors.question}</span>
                            )}
                                
           

                    <div>
                    <Field
                        as='textarea' 
                        name='message'
                        id='message'
                        placeholder='Write a message about your question...'
                        className='input textarea'
                        />
                        {touched.message && errors.message &&(
                                <span className='error'>{errors.message}</span>
                                )}
                    </div>
                    <button className='btn' type="submit">Submit</button>
            {responseServer && <div>{responseServer}</div>}

                </Form>
        )}
          </Formik>
            </div>
          
          );
    ;
};

export default Inquiries;