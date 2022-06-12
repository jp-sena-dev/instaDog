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

  position: relative;

  margin: 1% 1%;

  @media(min-width: 1020px) {
    width: 240px;
    height: 200px;
  }

  @media(max-width: 1020px) {
    width: 240px;
    height: 200px;
  }

  @media(max-width: 781px) {
    width: 235px;
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

  ::after {
    content: '';
    display: block;
    
    background-color: #00000000;
    transition: 0.2s;

    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
  :hover::after {
    background-color: #0000004d;
  }

`;

export const LImg = styled.img`
  width: 100%;
  height: 100%;
`;
