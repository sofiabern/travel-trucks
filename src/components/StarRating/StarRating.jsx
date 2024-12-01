import icons from "../../assets/images/icons.svg";
import Icon from "../Icon";
import s from './StarRating.module.css';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  const stars = [
    ...Array(fullStars).fill("full"),
    ...Array(emptyStars).fill("empty"),
  ];

  return (
    <ul className={s.stars}>
      {stars.map((star, index) => (
        <li key={index}>
    
          <Icon
            key={index}
            width='16px'
            height='16px'
            color={star === "full" ? "var(--yellow)" : "var(--light)"}
          >
            <use href={`${icons}#star`} />
          </Icon>
        </li>
      ))}
    </ul>
  );
};

export default StarRating;
