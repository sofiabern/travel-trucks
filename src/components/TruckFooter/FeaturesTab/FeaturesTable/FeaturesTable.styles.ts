import styled from "styled-components";

export const Table = styled.table`
  width: 527px;
  line-height: 1.5;
  table-layout: fixed;
  border-collapse: collapse;
`;

interface TableCellProps {
  $align?: "left" | "right";
}

export const TableCell = styled.td<TableCellProps>`
  font-weight: 500;
  text-align: ${({ $align }) => ($align === "right" ? "right" : "left")};
  padding: 8px 0px;
`;
