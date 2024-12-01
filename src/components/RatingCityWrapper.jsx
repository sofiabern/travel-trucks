import styled from "styled-components";

const RatingCityWrapper = styled.div`
  display: flex;
  gap: ${({ $gap }) => $gap || "16px"};
  ${({ $customStyles }) => $customStyles && { ...$customStyles }}
`;

export default RatingCityWrapper;