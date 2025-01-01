import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 0.7;
    visibility: visible;
  }
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: fixed;
    top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  animation: ${fadeIn} var(--func-time) var(--func);
`;
