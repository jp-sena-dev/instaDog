import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Icon = styled.i`
  font-size: 1.6em;
  color: ${({ color }) => (`${color}`)};
  cursor: pointer;

  transition: 0.3s;
  :hover {
    color: #000000c2;
  }
`;
