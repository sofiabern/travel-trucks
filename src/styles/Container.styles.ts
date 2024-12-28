import React from "react";
import styled from "styled-components";

interface ContainerProps {
  className: string;
  customStyles?: React.CSSProperties; 
}

export const Container = styled.div<ContainerProps>`
  ${({ className }) => className};
  ${({ customStyles }) => customStyles && { ...customStyles }};
`;
