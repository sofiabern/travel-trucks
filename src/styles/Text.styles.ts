import styled from 'styled-components';

interface AccentTextProps {
  color: string;
}

export const AccentText = styled.span<AccentTextProps>`
  color: ${({ color }) => color}
`;