import styled from 'styled-components';

interface AccentTextProps {
  color: string;
}

export const AccentText = styled.span<AccentTextProps>`
  color: ${({ color }) => color}
`;


interface BoldTextProps {
  $customStyles?: React.CSSProperties;
}

export const BoldText = styled.p<BoldTextProps>`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  color: var(--dark-blue);

  ${({ $customStyles }) => $customStyles && { ...$customStyles }}
`;

interface SmallTextProps {
  $underlined?: boolean;
  $customStyles?: React.CSSProperties;
}

export const SmallText = styled.p<SmallTextProps>`
  line-height: 1.5;
  color: var(--dark-blue);
  font-weight: 400;
  position: relative;

  ${({ $underlined }) =>
    $underlined &&
    `
    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: currentColor;
      transition: width 0.3s ease;
    }
  `}

  ${({ $customStyles }) => $customStyles && { ...$customStyles }}
`;

export const ErrorText = styled.p`
font-size: 24px;
margin: 0 auto;
line-height: 1.5;
color: var(--dark-blue);
font-weight: 600;
`;