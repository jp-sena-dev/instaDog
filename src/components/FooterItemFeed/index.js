import React from 'react';
import Heart from './Heart';
import Plane from './Plane';
import { FooterDiv } from './styles';
import '../../assets/icons/icomoon/style.css';
import Bookmark from './Bookmark';

export default function ListFooterItemImg(props) {
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
