import styled from "styled-components";

const SmallText = styled.p`
  line-height: 1.5;
  color: ${({ color }) => color || "var(--dark-blue)"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
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

export default SmallText;
