import styled from "styled-components";

const Icon = styled.svg`
  fill: ${({ color }) => color || "var(--dark-blue)"};
`;

export default Icon;