import styled from "styled-components";

interface RatingCityProps {
  $customStyles?: React.CSSProperties;
}

export const RatingCity = styled.div<RatingCityProps>`
  display: flex;
  gap: 16px;

  ${({ $customStyles }) => $customStyles && { ...$customStyles }}
`;
