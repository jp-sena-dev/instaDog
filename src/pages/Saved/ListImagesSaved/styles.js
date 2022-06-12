import styled from 'styled-components';

export const LUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
  width: 100%;
`;

export const Lmain = styled.div`
  display: block;
  margin: auto;
  max-width: 768px;
`;

export const LLi = styled.li`
  list-style-type: none;  
  background-color: black;

  margin: 1% 1%;

  @media(min-width: 1020px) {
    width: 240px;
    height: 200px;
  }

  @media(max-width: 1020px) {
    width: 240px;
    height: 200px;
  }

  @media(max-width: 768px) {
    width: 30.6vw;
    height: 20vh;
  }

  @media(max-width: 637px) {
    width: 30.5%;
    height: 20vh;
  }
`;

export const LImg = styled.img`
  width: 100%;
  height: 100%;
`;
