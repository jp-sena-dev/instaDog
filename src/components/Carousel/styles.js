import styled from 'styled-components';

export const CMain = styled.div`
  z-index: 12;

  background-color: #00000073;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;


  width: 100vw;
  height: 100vh;

  button {
    margin: auto;
    width: 200px;
    height: 200px;
  }
`;

export const CCarousel = styled.div`
  width: 60vw;
  height: 80vh;
  margin: 0 auto;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  @media(max-width: 768px) {
    width: 95vw;
  }

  background-color: white;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CItem = styled.div`
  flex: none;
  max-height: 100%;
  min-width: 100%;
  max-width: 95vw;

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;

  scroll-snap-align: center;
`;

export const CImg = styled.img`
  flex: none;
  height: min-content;
  max-height: 100%;
  max-width: 100%;
`;
