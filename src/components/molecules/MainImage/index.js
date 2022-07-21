import React from 'react';
import ImageDog from '../../atoms/ImageDog';
import { DivImage } from './styles';

export default function MainImage({ imageUrl }) {
  return (
    <DivImage>
      <ImageDog imageUrl={imageUrl} alt="Dog-img" />
    </DivImage>
  );
}
