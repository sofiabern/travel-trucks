import { StyledLogo } from "./Logo.styles";
import { AccentText } from "../../../styles/Text.styles";
const Logo = () => {
  return (
    <StyledLogo to="/">
      Travel<AccentText color="var(--dark-gray)">Trucks</AccentText>
    </StyledLogo>
  );
};

export default Logo;
