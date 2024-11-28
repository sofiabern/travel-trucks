import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  font-size: 20px;
  font-weight: 900;
  padding: 6px;
  position: absolute;
  top: 50%;
  left: 64px;
  transform: translateY(-50%);
`;

const GrayText = styled.span`
  color: var(--dark-gray);
`;

const Logo = () => {
  return (
    <StyledLogo to="/">
      Travel<GrayText>Trucks</GrayText>
    </StyledLogo>
  );
};

export default Logo;
