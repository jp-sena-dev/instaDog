import React from 'react';
import ImageProfile from '../../atoms/ImageProfile';
import { SHeaderDiv } from './styles';

export default function HeaderImage() {
  return (
    <SHeaderDiv>
      <ImageProfile />
      <p>dog lovers</p>
    </SHeaderDiv>
  );
}
