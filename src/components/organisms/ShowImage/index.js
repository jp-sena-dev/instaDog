import React, { useState } from 'react';
import { useImages } from '../../../context/ImagesContext';
import MainImage from '../../molecules/MainImage';
import HeaderImage from '../../molecules/HeaderImage';
import FooterImage from '../../molecules/FooterImage';
import { SImageDiv } from './styles';

export default function ShowImage({ image }) {
  const { savedList } = useImages();
  const [imageUrl] = useState(savedList[image]);

  return (
    <SImageDiv>
      <HeaderImage />
      <MainImage imageUrl={imageUrl} />
      <FooterImage imageUrl={imageUrl} />
    </SImageDiv>
  );
}
