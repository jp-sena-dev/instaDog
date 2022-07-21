import React from 'react';
import Bookmark from '../../atoms/Bookmark';
import Heart from '../../atoms/Heart';
import Plane from '../../atoms/Plane';
import { SFooterDiv } from './styles';
import '../../../assets/icons/icomoon/style.css';

export default function FooterImage({ imageUrl }) {
  return (
    <SFooterDiv>
      <div>
        <Heart imageUrl={imageUrl} />
        <Plane imageUrl={imageUrl} />
      </div>
      <Bookmark imageUrl={imageUrl} />
    </SFooterDiv>
  );
}
