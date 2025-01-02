import {StyledNav, StyledLink} from './Navigation.styles'

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/catalog" end>Catalog</StyledLink>
    </StyledNav>
  );
};

export default Navigation;