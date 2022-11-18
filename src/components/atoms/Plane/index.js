import React from 'react';
import { SIconPlane } from './styles';
import '../../../assets/icons/icomoon/style.css';
import { useShare } from '../../../context/ShareModalContext';

export default function Plane({ imageUrl }) {
  const { setShareImage, setShow } = useShare();

  return (
    <SIconPlane
      type="bookmark"
      onClick={() => {
        setShareImage(`${imageUrl}`);
        setShow(true);
      }}
      className="icon-paper-plane icon"
    />
  );
}
