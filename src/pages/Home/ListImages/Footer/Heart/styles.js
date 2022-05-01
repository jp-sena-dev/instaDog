import styled from 'styled-components';

const anim = (thereIs) => {
  if (thereIs === true) {
    return '1.55em';
  }
  return '1.5em';
};

const IconHeart = styled.i`
  transition: 0.2s;
  cursor: pointer;
  color: ${({ color }) => (`rgb(${color})`)};
  font-size: ${({ animation }) => (anim(animation))};
  margin-right: 6px;
  margin-left: 2px;

`;

export default IconHeart;
