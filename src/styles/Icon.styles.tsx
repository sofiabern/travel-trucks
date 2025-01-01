import styled from "styled-components";

interface IconProps {
  color?: string;
}

export const Icon = styled.svg<IconProps>`
  fill: ${({ color }) => color || "var(--dark-blue)"};
`;


