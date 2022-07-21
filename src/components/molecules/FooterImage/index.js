import React from 'react';
import Heart from '../../atoms/Heart';
import Plane from '../../atoms/Plane';
import { FooterDiv } from './styles';
import '../../../assets/icons/icomoon/style.css';
import Bookmark from '../../atoms/Bookmark';

export default function FooterImage(props) {
  const { imageUrl } = props;
  return (
    <FooterDiv>
      <div>
        <Heart imageUrl={imageUrl} />
        <Plane imageUrl={imageUrl} />
      </div>
      <Bookmark imageUrl={imageUrl} />
    </FooterDiv>
  );
}
