import React from 'react';
import { FaStar } from "react-icons/fa";
import { Label, Textarea, Button } from "flowbite-react";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import './Reviews.scss';
import { postReviwer, getDetail } from '../../redux/actions/actions';
import { getAuth } from "firebase/auth";
// import StarRating from '../StarRating/StarRating';

export const Reviews = () => {
  const showAlert = () => {
    Swal.fire({
      title: "Please, login",
      icon: "warning",
    })
  }
  const auth = getAuth();
  const currentUser = auth.currentUser;
  // console.log(currentUser)

  const uid = currentUser ? currentUser.uid : showAlert;
  const photoUser = currentUser ? currentUser.photoURL : showAlert;
  const nameUser = currentUser ? currentUser.displayName : showAlert;

  const { id } = useParams();
  const dispatch = useDispatch();

  const [currentValue, setcurrentValue] = useState(0)
  const [hoverValue, sethoverValue] = useState(undefined)
  const stars = Array(5).fill(0)

  const [input, setInput] = useState({ uid: "", Img: "", Name: "", Reviwer: "", score: "" })

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  const handleClick = (value) => {
    setcurrentValue(value)

  }

  const handleMouse = (newValue) => {
    sethoverValue(newValue)
  }

  const handleMouseLeave = () => {
    sethoverValue(undefined)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postReviwer(id, uid, photoUser, nameUser, input, currentValue));
    setInput({ uid: "", Img: "", Name: "", Reviwer: "", score: "" });
    sethoverValue(undefined)
    setcurrentValue(0)
    new Swal("Excellent!", "Thank you for your comment", "success").then(() => { dispatch(getDetail(id)) })
  };

  let btndisabled = !(
    currentValue &&
    input.Reviwer.length
  )

  return (
    <div className='fullContRev'>
      <div className='containerReview'>
        <div className='reseña'>¡Leave your review!</div>
        <form onSubmit={(event) => handleSubmit(event)}>

          <div className='estrellas'>
            {stars.map((_, index) => {
              return (
                <div key={index}>
                  <FaStar
                    className={(hoverValue || currentValue) > index ? 'amarillo' : 'gris'}
                    key={index}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouse(index + 1)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              )
            })}
          </div>

          <div id="textarea" className='textareaRev'>
            <div className="mb-2-block">
              <Label htmlFor="Reviwer" /> </div>
            <Textarea
              id="Reviwer"
              className='textarea'
              placeholder="Leave a Reviwer..."
              required={true}
              rows={4}
              onChange={(e) => handleChange(e)}
              name="Reviwer"
              value={input.Reviwer} />
          </div>

          <Button
            className='botonRev'
            gradientDuoTone="purpleToBlue"
            type="submit"
            disabled={btndisabled}>Send</Button>

        </form>
      </div>
    </div>
  )
}
export default Reviews;