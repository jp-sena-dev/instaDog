import styled from 'styled-components';

export const DivAlert = styled.div`
  transition: 0.5s;
  position: fixed;
  top: 0;
  left: ${({ display }) => {
    if (display === 'none') {
      return '-155px';
    }
    return '0.5px';
  }};
  height: 40px;
  width: 150px;
  border: solid 1px black;
  background-color: #0971B3;
`;

export const Section = styled.section`
  width: 80%;
  height: 100%;
  background-color: white;
  z-index: 10;
`;
