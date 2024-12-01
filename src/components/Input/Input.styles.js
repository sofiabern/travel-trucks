import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  ${(props) => props.$customWrapperStyles}
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
  color: var(--gray);
`;

export const StyledInput = styled.input`
  font-size: 16px;
  color: var(--dark-blue);
  line-height: 1.5;
  padding: ${(props) => props.$padding || "18px"};
  width: 100%;
  height: ${(props) => props.height || "60px"};
  background-color: var(--lighter);
  border-radius: 12px;
  border-color: transparent;
  transition: all var(--func-time) var(--func);

  &::placeholder {
    font-size: 16px;
    color: var(--gray);
    line-height: 1.5;
    transition: all var(--func-time) var(--func);
  }

  &:hover::placeholder,
  &:focus::placeholder {
    color: var(--dark-blue);
  }

  &:hover + svg,
  &:focus + svg {
    fill: var(--dark-blue);
  }
`;

export const Icon = styled.svg`
  position: absolute;
  top: 18px;
  left: 18px;
  pointer-events: none;
  fill: ${(props) => (props.$hasValue ? "var(--dark-blue)" : "var(--gray)")};
  transition: all var(--func-time) var(--func);
`;
