import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px); 
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Item = styled.li`
  border-radius: 20px;
  border: 1px solid var(--light-gray);
  padding: 24px;
  display: flex;
  gap: 24px;
  width: 888px;
  animation: ${fadeIn} 0.6s ease-out forwards;
`;



export const FavButton = styled.button`
  border: none;
  background-color: transparent;

  &:hover svg {
    fill: var(--red-light);
  }
`;

export const FavIcon = styled.svg`
  fill: ${({ $isFavorite }) =>
    $isFavorite ? "var(--red-light)" : "var(--dark-blue)"};
  align-self: center;
  transition: fill var(--func-time) var(--func);
`;

