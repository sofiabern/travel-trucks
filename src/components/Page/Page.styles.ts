import styled from "styled-components";

interface StyledMainProps {
  $customStyles?: React.CSSProperties;
}

const StyledMain = styled.main<StyledMainProps>`
  ${({ $customStyles }) => $customStyles && { ...$customStyles }}
`;

export default StyledMain;
