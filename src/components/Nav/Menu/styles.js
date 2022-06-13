import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MIcon = styled.p`
  cursor: pointer;
  font-size: 1.5rem;
`;

export const DivMain = styled.div`
  position: relative;
`;

export const MA = styled.a`
  color: black;
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;

  text-decoration: none;
`;

export const MLink = styled(Link)`
  color: black;
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;

  text-decoration: none;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
    
  li:first-of-type {
    border-radius: 10px 0 0 0;
  }

  li:last-of-type {
    border-radius: 0 0 12px 12px;
  }
`;

export const Li = styled.li`
  list-style-type: none;

  color: black;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 2em;

  cursor: pointer;

  li {
    border-radius: 0 0 0 0;
  }

  :hover {
    background-color: #00000030;
  }
`;

const setDisplay = (state) => {
  if (state) {
    return 'opacity: 1; visibility: visible; height: 120px; width: 120px;font-size: 1em;';
  }
  return 'opacity: 0; visibility: hidden; height: 0px; width: 0px;font-size: 0;';
};

export const ItemsMenu = styled.div`
  ${({ show }) => (setDisplay(show))};
  transition: height 0.25s;
  transition: 0.5s;
  position: absolute;
  right: 1px;
  
  z-index: 10;

  background-color: white;
  border: 1px solid #00000030;
  border-radius: 20% 5% 20% 20%;
`;

export const Paragraph = styled.p`
  margin: 0;
`;

export const Icon = styled.i`
  margin-right: 5px;
  font-size: 1em;
`;
