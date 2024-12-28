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
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} var(--func-time) var(--func);
`;
