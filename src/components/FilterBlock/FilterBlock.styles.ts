import styled from "styled-components";

export const FilterList = styled.ul`
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

export const FilterTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  color: var(--dark-blue);
  margin-bottom: 49px;
  }
`;
