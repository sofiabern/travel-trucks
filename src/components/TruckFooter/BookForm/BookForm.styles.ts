import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 44px 57px;
  width: 641px;
  border: 1px solid var(--light-gray);
  border-radius: 10px;
`

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const StyledTextArea = styled.textarea<{$customStyles?: React.CSSProperties;}>`
  font-size: 16px;
  color: var(--dark-blue);
  line-height: 1.5;
  padding: 18px;
  width: 100%;
 resize: none;
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

     ${({ $customStyles }) =>
    $customStyles && { ...$customStyles }}
`;
