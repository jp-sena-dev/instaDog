import styled from 'styled-components';

export const SUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const Smain = styled.div`
  display: block;
  margin: 0 auto;
  min-height: 80vh;
  max-width: 768px;
`;

export const SLi = styled.li`
  list-style-type: none;  
  background-color: black;

  cursor: pointer;

  position: relative;

  margin: 0.5%;
  width: 32.2%;


  @media(min-width: 1020px) {
    height: 250px;
  }

  @media(max-width: 1020px) {
    height: 250px;
  }

  @media(max-width: 781px) {
    height: 250px;
  }

  @media(max-width: 768px) {
    height: 25vh;
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

export const SImg = styled.div`
  background: #ffff url(${({ src }) => src}) center;
  width: 100%;
  height: 100%;
`;
