import React from 'react';
import { ImgProfile } from './styles';
import profileTheDog from '../../../assets/imgs/profileTheDog.jpeg';

export default function ImageProfile() {
  return (
    <ImgProfile
      src={profileTheDog}
      alt="foto-perfil"
    />
  );
}
