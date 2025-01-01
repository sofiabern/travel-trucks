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

export const StyledItem = styled.li`
  border-radius: 20px;
  border: 1px solid var(--light-gray);
  padding: 24px;
  display: flex;
  gap: 24px;
  width: 888px;
  animation: ${fadeIn} 0.6s ease-out forwards;
`;
export const CardContent = styled.div`
  width: 100%;
`;

export const NameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export const PriceAndFav = styled.div`
  display: flex;
  gap: 12px;
`

export const FavButton = styled.button`
  border: none;
  background-color: transparent;

  &:hover svg {
    fill: var(--light-red);
  }
`;

interface FavIconProps {
  $isFavorite: boolean;
}

export const FavIcon = styled.svg<FavIconProps>`
  fill: ${({ $isFavorite }) =>
    $isFavorite ? "var(--light-red)" : "var(--dark-blue)"};
  align-self: center;
  transition: fill var(--func-time) var(--func);
`;
