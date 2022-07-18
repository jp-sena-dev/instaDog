import React from 'react';
import { HeaderDiv, ImgProfile } from './styles';
import profileTheDog from '../../assets/imgs/profileTheDog.jpeg';

export default function HeaderItemImg() {
  return (
    <HeaderDiv>
      <ImgProfile
        src={profileTheDog}
        alt="foto-perfil"
      />
      <p>dog lovers</p>
    </HeaderDiv>
  );
}
