import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 68px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--light-gray);
  }
`;

export const StyledLink = styled(Link)<{ $isActive?: boolean }>`
  position: relative;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;
  color: var(--dark-blue);
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -26px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: var(--light-red);
    z-index: 10;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  }
`;