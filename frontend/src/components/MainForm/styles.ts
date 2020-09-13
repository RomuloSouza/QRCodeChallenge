
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 70%;
  margin: auto;

  background: var(--color-primary);
`;

export const Form = styled.div`
  display: flex;
  width: 45%;

  flex-direction: column;
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

    .focus, &:focus {
      outline: 0;
      box-shadow: none!important;
    }
  }
`;

