import styled from "styled-components";

export const Table = styled.table`
  width: 527px;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const TableCell = styled.td`
  font-weight: 500;
  text-align: ${({$align}) => ($align === "right" ? "right" : "left")};
  padding: 8px 0px;
`;
