import React from 'react';
import MainImage from '../../molecules/MainImage';
import HeaderImage from '../../molecules/HeaderImage';
import FooterImage from '../../molecules/FooterImage';
import { SImageDiv } from './styles';

export default function ShowImage({ image }) {
  return (
    <SImageDiv>
      <HeaderImage />
      <MainImage imageUrl={image.replace(/&/g, '/')} />
      <FooterImage imageUrl={image.replace(/&/g, '/')} />
    </SImageDiv>
  );
}
