import styled from 'styled-components';

export const DivAlert = styled.div`
  transition: 0.5s;
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  left: ${({ display }) => {
    if (display === 'none') {
      return 'opacity: 0; visibility: hidden; width: 0px; font-size: 0;';
    }
    return 'opacity: 1; visibility: visible; width: 150px; font-size: 1em;';
  }};
  height: 40px;
  border: 1px solid #00000030;
  background-color: #0971B3;
`;

export const Section = styled.section`
  width: 100%;
  height: 90%;
  background-color: white;
  z-index: 10;
`;
