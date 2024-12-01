import styled from "styled-components";
import Icon from "./Icon";
import SmallText from "./SmallText";
import icons from "../assets/images/icons.svg";

const StyledCity = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const City = ({ location }) => {
  return (
    <StyledCity>
      <Icon width="16px" height="16px" color="var(--dark-blue)">
        <use href={`${icons}#map`} />
      </Icon>
      <SmallText color="var(--dark-blue)">{location}</SmallText>
    </StyledCity>
  );
};

export default City;
