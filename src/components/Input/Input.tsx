import React, { useId, InputHTMLAttributes } from "react";
import { InputWrapper, Label, StyledInput, Icon } from "./Input.styles";
import icons from "../../assets/images/icons.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: string; 
    label?: string; 
    $customInputStyles?: React.CSSProperties; 
    value?: string; 
  }
const Input = ({ icon, label, $customInputStyles, value, ...props }: InputProps) => {
  const id = useId();

  const hasValue = Boolean(value);

  return icon ? (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper>
        <StyledInput $customInputStyles={$customInputStyles} {...props} value={value} id={id} />
        <Icon $hasValue={hasValue} width="20px" height="20px">
          <use href={`${icons}#${icon}`} />
        </Icon>
      </InputWrapper>
    </div>
  ) : (
    <>
      <StyledInput $customInputStyles={$customInputStyles} {...props} value={value} />
    </>
  );
};

export default Input;
