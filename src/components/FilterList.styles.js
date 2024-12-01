import styled from "styled-components";

const FilterList = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
 position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -24px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--light-gray);
`;

export default FilterList;
