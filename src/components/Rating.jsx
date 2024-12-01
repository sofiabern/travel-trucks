import styled from "styled-components";
import Icon from "./Icon";
import SmallText from "./SmallText";
import icons from "../assets/images/icons.svg";

const StyledRating = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const Rating = ({ reviews, rating }) => {
  return (
    <StyledRating>
      <Icon width="16px" height="16px" color="var(--yellow)">
        <use href={`${icons}#star`} />
      </Icon>
      <SmallText $underlined color="var(--dark-blue)">
        {reviews.length === 0
          ? "No reviews"
          : `${rating}(${reviews.length} Review${reviews.length > 1 ? "s" : ""})`}
      </SmallText>
    </StyledRating>
  );
};

export default Rating;
