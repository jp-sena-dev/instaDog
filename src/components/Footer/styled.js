import styled from 'styled-components';

export const FFooter = styled.footer`
  height: 10vh;
`;

export const FDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  
  p {
    font-size: 1em;
    margin: 0 5px;
    color: #626262;
  }

  a p, a {
    text-decoration: none;
    color: #8E8E8E;
  }
`;
