import styled from 'styled-components';

export const SOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 320px;
  margin: 5px auto;
`;

export const SCopyContainer = styled.div`
  margin: 10px auto;
  width: 90%;
  max-width: 450px;
  height: 50px;
  display: grid;
  grid-template-columns: 80% 20%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1px 5px;

  input {
    height: 100%;
    border: none;
  }

  button {
    height: 80%;
    margin: auto 0;
    border: none;
    background-color: gray;
    border-radius: 10px;
  }
`;
