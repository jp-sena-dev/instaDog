import React from 'react';
import { IconContainer } from './styles';

export default function IconShare({ link, display }) {
  return (
    <IconContainer
      href={link}
      target="blank"
    >
      <div>
        {display }
      </div>
    </IconContainer>
  );
}
