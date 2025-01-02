import styled from "styled-components";

interface ListProps {
  $customStyles?: React.CSSProperties;
}

export const List = styled.ul<ListProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  ${({ $customStyles }) => $customStyles && { ...$customStyles }};
`;
