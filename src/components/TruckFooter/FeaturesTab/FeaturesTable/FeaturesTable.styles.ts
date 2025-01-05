import styled from "styled-components";    


export const Wrapper = styled.div`
  position: relative; 

  &::after {
    content: "";
    position: absolute;
    top: 48px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--light-gray);
  }
`

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
