import React from 'react';
import { ImgDog, DivImage } from './styles';

export default function Main(props) {
  const { imageUrl } = props;
  return (
    <DivImage>
      <ImgDog src={imageUrl} alt="Dog-img" />
    </DivImage>
  );
}
