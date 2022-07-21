import React from 'react';
import ImageDog from '../../atoms/ImageDog';
import { SDivImage } from './styles';

export default function MainImage({ imageUrl }) {
  return (
    <SDivImage>
      <ImageDog imageUrl={imageUrl} alt="Dog-img" />
    </SDivImage>
  );
}
