import React from 'react';
import { SImage } from './styles';

export default function ImageDog({ imageUrl }) {
  return (
    <SImage src={imageUrl} alt="Dog-img" />
  );
}
