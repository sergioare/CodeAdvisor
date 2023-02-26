import React from 'react';
// import { reviews } from './data';
import { FaStar } from "react-icons/fa";
import { Label, Textarea, Button } from "flowbite-react";
import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import './Reviews.scss';
import Swal from 'sweetalert2';
import './Reviews.scss';
// import StarRating from '../StarRating/StarRating';

export const Reviews = () => {

  const showAlert = () => {
    Swal.fire({
      title: "Sorry, We are working for you",
      icon: "warning",
      footer: "<b>Continue to enjoy our services</b>",
      timer: 3000,
    })
  }

  const [input, setInput] = useState({
    comment: ""
  })

  // const { id } = useParams()
  // const dispatch = useDispatch()
  const [currentValue, setcurrentValue] = useState({
    rating: ""
  })
  const [hoverValue, sethoverValue] = useState(undefined)
  const stars = Array(5).fill(0)


  const handleChange = (ev) => {
    setInput({
      ...input,
      [ev.target.name]: ev.target.value,
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

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // dispatch(postComment(id, input));
    // dispatch(putRating(id, currentValue))
    setInput({
      comment: ""
    });
    // dispatch(getComment())
    sethoverValue(undefined)
    setcurrentValue({
      rating: ""
    })
    // Swal("¡Excelente!", "Gracias por tu comentario", "success").then(() => { dispatch(getComment()) })

  };

  let btndisabled = !(
    currentValue &&
    input.comment.length
  )

  return (
    <div className='fullContRev'>
      <div className='containerReview'>
        <div className='reseña'>¡Leave your review!</div>
        <form onSubmit={(event) => handleSubmit(event)}>

          <div className='estrellas'>
            {stars.map((_, index) => {
              return (
                <div>
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
              <Label htmlFor="comment" /> </div>
            <Textarea
              id="comment"
              className='textarea'
              placeholder="Leave a comment..."
              required={true}
              rows={4}
              onChange={(e) => handleChange(e)}
              name="comment"
              value={input.comment} />
          </div>

          <Button
            className='botonRev'
            gradientDuoTone="purpleToBlue"
            type="submit"
            // disabled={btndisabled}
            onClick={showAlert}>Send</Button>

        </form>
      </div>
    </div>
  )
}
export default Reviews;