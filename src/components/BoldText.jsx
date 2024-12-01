import styled from "styled-components";

const BoldText = styled.p`
  font-weight: 600;
  font-size: ${({ $fontSize }) => $fontSize || "24px"};
  line-height: 1.3;
  color: var(--dark-blue);

  ${({ $customStyles }) => $customStyles && { ...$customStyles }}
`;

export default BoldText;
