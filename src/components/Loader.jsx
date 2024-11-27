import { MutatingDots } from 'react-loader-spinner';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); 
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 350ms ease-out forwards; 
  z-index: 10;
`;

const Loader = () => (
  <Backdrop>
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#ff0000"
      secondaryColor="#ff0000"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
    />
  </Backdrop>
);

export default Loader;
