import styled from 'styled-components';

export const ImageUl = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
`;

export const ImgLi = styled.li`
  list-style-type: none;
  
  display: grid;
  grid-template-rows: 50px min-content 50px;
  
  margin: 10px 0;
  border: 1px solid #00000030;
  
  width: 40%;

  @media(max-width: 1080px) {
    width: 50%;
  }

  @media(max-width: 768px) {
    width: 70%;
  }

  @media(max-width: 560px){
    width: 80%;
  }

  @media(max-width: 425px) {
    width: 99vw;
  }
`;

export const DivLi = styled.div`
  height: 100%;
  width: 100%;
`;
