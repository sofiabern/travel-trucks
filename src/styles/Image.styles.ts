import styled from "styled-components";

interface ImageProps {
    $customStyles?: React.CSSProperties;
  }

  export const Image = styled.img<ImageProps>`
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
  flex-shrink: 0;

  ${({ $customStyles }) => $customStyles && { ...$customStyles }}
`;
