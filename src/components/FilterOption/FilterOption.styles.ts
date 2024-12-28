import styled from "styled-components";

export const HiddenInput = styled.input`
  display: none;

  &:checked + label {
    border-color: var(--light-red);
  }
`;

export const StyledLabel = styled.label`
  width: 112px;
  height: 96px;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid var(--light-gray);
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--light-red);
  }
`;

export const Icon = styled.svg`
  fill: var(--dark-blue);
  transition: fill 0.3s ease;
`;

export const LabelText = styled.span`
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  text-align: center;
  color: var(--dark-blue);
`;