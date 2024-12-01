import { useId } from "react";
import { InputWrapper, Label, StyledInput, Icon } from "./Input.styles";
import icons from "../../assets/images/icons.svg";

const Input = ({ icon, label, $customWrapperStyles, value, ...props }) => {
  const id = useId();

  const hasValue = Boolean(value);

  return icon ? (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper $customWrapperStyles={$customWrapperStyles}>
        <StyledInput {...props} value={value} id={id} />
        {icon && (
          <Icon $hasValue={hasValue} width="20px" height="20px">
            <use href={`${icons}#${icon}`} />
          </Icon>
        )}
      </InputWrapper>
    </>
  ) : (
    <>
      <StyledInput {...props} value={value} />
    </>
  );
};

export default Input;
