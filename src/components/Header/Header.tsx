import { StyledHeader } from "./Header.styles";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
