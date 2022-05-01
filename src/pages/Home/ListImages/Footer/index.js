import React from 'react';
import Heart from './Heart';
import Plane from './Plane';
import { FooterDiv } from './styles';
import '../../../../assets/icons/icomoon/style.css';

export default function Footer(props) {
  const { imageUrl } = props;
  return (
    <FooterDiv>
      <Heart />
      <Plane imageUrl={imageUrl} />
    </FooterDiv>
  );
}
