import {StyledNav, StyledLink} from './Navigation.styles'

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/catalog">Catalog</StyledLink>
    </StyledNav>
  );
};

export default Navigation;