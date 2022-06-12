import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HamburgerIcon = styled.p`
  cursor: pointer;
`;

export const DivMain = styled.div`
  position: relative;
`;

export const MLink = styled(Link)`
  color: black;
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
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;

  
  width: 100%;
  height: 2em;

  cursor: pointer;

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
