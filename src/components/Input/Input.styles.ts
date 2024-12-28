import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
  color: var(--gray);
`;

export const StyledInput = styled.input<{$customInputStyles?: React.CSSProperties;}>`
  font-size: 16px;
  color: var(--dark-blue);
  line-height: 1.5;
  padding: 18px;
  width: 100%;
  height: 60px;
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
     ${({ $customInputStyles }) =>
    $customInputStyles && { ...$customInputStyles }}
`;

export const Icon = styled.svg<{ $hasValue?: boolean;}>`
  position: absolute;
  top: 18px;
  left: 18px;
  pointer-events: none;
  fill: ${({ $hasValue }) => ($hasValue ? "var(--dark-blue)" : "var(--gray)")};
  transition: all var(--func-time) var(--func);
`;
