import React, { useState } from 'react';
import { SIconPlane } from './styles';
import Alert from '../Alert';
import '../../../assets/icons/icomoon/style.css';

export default function Plane({ imageUrl }) {
  const [alertDisplay, setAlertDisplay] = useState('none');

  const changeAlertDisplay = () => {
    setTimeout(() => {
      setAlertDisplay('none');
    }, 2000);
    setAlertDisplay('block');
  };

  return (
    <>
      <SIconPlane
        type="bookmark"
        onClick={() => {
          navigator.clipboard.writeText(`${imageUrl}`);
          changeAlertDisplay();
        }}
        className="icon-paper-plane icon"
      />
      <Alert display={alertDisplay} />
    </>
  );
}
