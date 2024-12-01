import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { StyledHeader } from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
