import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const commonStyles = css`
  font-size: 16px;
  font-weight: 500;
  color: ${({ $appearance }) =>
    $appearance === "transparent" ? "var(--dark-blue)" : "var(--white)"};
  line-height: 1.5;
  letter-spacing: -0.08px;
  border: none;
  border-radius: 32px;
  display: inline-block;
  padding: 16px ${({ $padding }) => $padding || "24px"};

  transition:
    background-color var(--func-time) var(--func),
    border-color var(--func-time) var(--func),
    color var(--func-time) var(--func);

  background-color: ${({ $appearance }) =>
    $appearance === "transparent" ? "transparent" : "var(--red-light)"};
  border: ${({ $appearance }) =>
    $appearance === "transparent" ? "1px solid var(--light-gray)" : "none"};

  &:hover {
    background-color: ${({ $appearance }) =>
      $appearance === "transparent" ? "transparent" : "var(--red)"};
    border-color: ${({ $appearance }) =>
      $appearance === "transparent" ? "var(--red)" : "none"};
  }

  ${({ $customStyles }) => $customStyles || ""}
`;

export const StyledButton = styled.button`
  ${commonStyles}
`;

export const StyledLink = styled(Link)`
  ${commonStyles}
`;
