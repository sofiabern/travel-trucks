 import styled from "styled-components";
 const Image = styled.img`
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
  flex-shrink: 0;

    ${({ $customStyles }) => $customStyles && { ...$customStyles }}

`;

export default Image;