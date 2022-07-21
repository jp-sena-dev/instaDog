import styled from 'styled-components';

export const SDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;

  z-index: 10;

  box-shadow: 0px 5px 11px 0px #00000016;

  background-color: whitesmoke;

  width: 100%;
  height: 10vh;

  @media(min-width: 1024px) {
    justify-content: space-around;
  }
`;

export const SWrapper = styled.div`
  width: min-content;
`;
