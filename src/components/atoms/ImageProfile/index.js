import React from 'react';
import { SImgProfile } from './styles';
import profileTheDog from '../../../assets/imgs/profileTheDog.jpeg';

export default function ImageProfile() {
  return (
    <SImgProfile
      src={profileTheDog}
      alt="foto-perfil"
    />
  );
}
