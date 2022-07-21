import React, { useState } from 'react';
import { IconPlane } from './styles';
import Alert from '../Alert';
import '../../../assets/icons/icomoon/style.css';

export default function Plane(props) {
  const { imageUrl } = props;
  const [alertDisplay, setAlertDisplay] = useState('none');
  const changeAlertDisplay = () => {
    setTimeout(() => {
      setAlertDisplay('none');
    }, 2000);
    setAlertDisplay('block');
  };

  return (
    <>
      <IconPlane
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
