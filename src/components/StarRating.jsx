import testimonials from '../testimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

function StarRating(props) {
  const numberOfStars = Math.floor(props.rating);
  const hasHalfStar = props.rating % 1 !== 0;

  const starsArray = Array.from({ length: numberOfStars }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} />
  ));

  if (hasHalfStar) {
    starsArray.push(<FontAwesomeIcon key="half-star" icon={faStarHalfAlt} />);
  }

  return <section className="star--rating">{starsArray}</section>;
}

export default StarRating;