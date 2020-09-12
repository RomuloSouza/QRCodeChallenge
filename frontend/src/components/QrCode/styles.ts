
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;

  background: var(--color-primary);

  // // @media (min-width: 1024px) {
  // //   max-width: 480px;
  // // }
`;

export const Square = styled.div`
  // height: 100%;
  // width: 100%;
  display: flex;
  &:hover {
    animation: ${rotate} 2s linear infinite;
  }
`;
