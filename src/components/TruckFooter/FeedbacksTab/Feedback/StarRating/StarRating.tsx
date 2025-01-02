import { List } from "./StarRating.styles";
import { Icon } from "../../../../../styles/Icon.styles";
import icons from "../../../../../assets/images/icons.svg";

interface StarRatingProps {
    rating: number; 
  }

const StarRating = ({ rating }: StarRatingProps) => {
console.log(rating)
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  const stars = [
    ...Array(fullStars).fill("full"),
    ...Array(emptyStars).fill("empty"),
  ];
  return (
    <List>
      {stars.map((star, index) => (
        <li key={index}>
          <Icon
            key={index}
            width="16px"
            height="16px"
            color={star === "full" ? "var(--yellow)" : "var(--light)"}
          >
            <use href={`${icons}#star`} />
          </Icon>
        </li>
      ))}
    </List>
  );
};

export default StarRating