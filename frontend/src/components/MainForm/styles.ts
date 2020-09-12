
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;

  background: var(--color-primary);

  // // @media (min-width: 1024px) {
  // //   max-width: 480px;
  // // }
`;

export const Form = styled.form`
  display: flex;
  // heigth: 100%;
  width: 50%;

  flex-direction: column;
  justify-content: center;
  // margin: 20vh auto;
  margin: auto;

  .title {
    color: var(--color-secondary);
    margin: 0 auto;
    font-size: 30px;
    font-weight: 500;
  }

  input {
    background: white;
    border: 2px solid var(--color-border);
    padding: 13px 18px;
    font-size: 14px;
    margin-top: 18px;
  }

  button {
    background: red;
    color: white;
    border: none;

    margin: 20px auto;
    padding: 5px;
    font-size: 18px;
  }
`;

