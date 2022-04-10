import React from 'react';
import ImgDog from './styles';

export default function Main(props) {
  const { imageUrl } = props;
  return (
    <div>
      <ImgDog src={imageUrl} alt="Dog-img" />
    </div>
  );
}
