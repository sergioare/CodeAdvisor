import './Newsletter.scss';
import Swal from 'sweetalert2';
import { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {

  const [input, setInput] = useState({
    full_name: "",
    email_address: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [property]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://code-advisor-back.vercel.app/XD/', input)
      .then(res => {
        setInput({
          full_name: "",
          email_address: "",
        });
        new Swal("Excellent!", "Thank you for subscribing", "success");
      })
      .catch((error) => {
        // console.log(error)
        new Swal("Sorry!", 'You are already written.', "warning");
      });
  };

  return (
    <div className="newsletter">
      {/* <div className="form"> */}

      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <h1>Get Started Now</h1>
        <p>Subscribe to our newsletter to receive promotions and news of our online classes</p>
        <input
          type='text'
          value={input.full_name}
          placeholder="Full name"
          name="full_name"
          // id="full_name"
          onChange={(event) => handleChange(event)}
          className='input-name'
        />
        <input
          type='email'
          value={input.email_address}
          placeholder="E-mail"
          name="email_address"
          // id="email_address"
          onChange={(event) => handleChange(event)}
          className='input-email'
        />
        <button className='btn'>Submit</button>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Newsletter;