import React from 'react';
import Modal from 'react-modal';
import { useShare } from '../../../context/ShareModalContext';
import ShareOptions from '../../molecules/ShareOptions';

export default function Share() {
  const { shareImage, show, setShow } = useShare();

  return (
    <Modal
      isOpen={show}
      onRequestClose={() => setShow(false)}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <ShareOptions shareImage={shareImage} />
    </Modal>
  );
}
