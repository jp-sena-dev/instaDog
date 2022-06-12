import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  @media(max-width: 768px) {
    padding: 0;
  }
  @media(min-width: 1024px) {
    justify-content: space-around;
  }
`;

export const H1Link = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const H1Dog = styled.h1`
  cursor: pointer;
`;
