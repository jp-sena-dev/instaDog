import styled from 'styled-components';

export const SIcon = styled.i`
  font-size: 1.6em;
  color: ${({ color }) => (`${color}`)};
  cursor: pointer;

  transition: 0.3s;
  :hover {
    color: #000000c2;
  }
`;
