import styled from "styled-components";
import Navigation from "./Navigation";
import Logo from "./Logo";

const StyledHeader = styled.header`
  background-color: var(--background-lighter);
  padding: 20px 64px 19px;
  border-bottom: 1px solid var(--background-light);
  position: relative;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
