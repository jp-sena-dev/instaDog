import styled from 'styled-components';

export const SImagesDiv = styled.div`
  min-height: 80vh;
`;

export const SImagesUl = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
`;

export const SLoading = styled.div`
  display: block;
  animation: is-rotating 2s infinite;

  border: 1px solid white;
  border-top-color: black;
  border-radius: 50%;

  margin: 10px auto;

  height: 50px;
  width: 50px;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;

export const SImageLi = styled.li`
  list-style-type: none;
  
  display: grid;
  grid-template-rows: 50px min-content 50px;
  
  margin: 10px 0;
  border: 1px solid #00000030;
  
  width: 400px;

  @media(max-width: 1020px) {
    width: 45%;
  }

  @media(max-width: 768px) {
    width: 400px;
  }

  @media(max-width: 400px){
    width: 99vw;
  }
`;

export const SDivObserver = styled.div`
  height: 100px;
  width: 100%;
`;
