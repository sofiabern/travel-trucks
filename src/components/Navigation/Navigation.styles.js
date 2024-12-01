import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  gap: 24px;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 4px;
  transition: color var(--func-time) var(--func);

  &.active,
  &:hover {
    color: var(--red);
  }
`;