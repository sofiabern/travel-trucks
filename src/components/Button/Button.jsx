import { StyledButton, StyledLink } from "./Button.styles";

const Button = ({ children, type = "button", $customStyles, ...props }) => {
  if (type !== "link") {
    return (
      <StyledButton type={type} $customStyles={$customStyles} {...props}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledLink $customStyles={$customStyles} {...props}>
      {children}
    </StyledLink>
  );
};

export default Button;
