import React from 'react';
import { HeaderDiv, ImgProfile } from './styles';

export default function Header() {
  return (
    <HeaderDiv>
      <ImgProfile
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="foto-perfil"
      />
    </HeaderDiv>
  );
}
