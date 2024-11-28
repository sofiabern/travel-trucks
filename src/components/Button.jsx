import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const commonStyles = css`
  font-size: 16px;
  font-weight: 500;
  color: var(--white);
  line-height: 1.5;
  letter-spacing: -0.08px;
  background-color: var(--red-light);
  border: none;
  border-radius: 32px;
  display:inline-block;
  transition: background-color var(--func-time) var(--func);

  &:hover,
  &:focus {
    background-color: var(--red);
  }
`;

const StyledButton = styled.button`
  ${commonStyles}
  padding: 16px ${(props) => props.padding };
`;

const StyledLink = styled(Link)`
  ${commonStyles}
  padding: 16px ${(props) => props.padding};
`;

const Button = ({ children, type = "button", ...props }) => {
  if (type === "button") {
    return <StyledButton {...props}>{children}</StyledButton>;
  }

  return <StyledLink {...props}>{children}</StyledLink>;
};

export default Button;
