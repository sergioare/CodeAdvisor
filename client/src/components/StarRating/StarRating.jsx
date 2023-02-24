import { FaStar } from 'react-icons/fa';
import './StarRating.scss'

const StarRating = (props) => {
  const rating = props.rating;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} className="star" />);
    } else {
      stars.push(<FaStar key={i} className="star-o" />);
    }
  }

  return <div className='start'>{stars}</div>;
};

export default StarRating;