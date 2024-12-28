import { StyledButton, StyledLink } from "./Button.styles";
interface ButtonProps {
  children: string;
  type: "button" | "submit" | "reset" | "link";
  to?: string;
  $appearance?: "transparent";
  $customStyles?: React.CSSProperties;
}
const Button = ({ children, type, to, ...props }: ButtonProps) => {
  if (type !== "link") {
    return (
      <StyledButton type={type} {...props}>
        {children}
      </StyledButton>
    );
  }
  if (to) {
    return (
      <StyledLink to={to} {...props}>
        {children}
      </StyledLink>
    );
  }
};

export default Button;
