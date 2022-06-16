import React from 'react';
import {
  CMain,
  CCarousel,
  CItem,
  CImg,
} from './styles';

export default function Carousel() {
  const changeImage = ({ deltaY, target }) => {
    if (deltaY > 0) {
      target.scrollBy(30, 0);
    } else {
      target.scrollBy(-30, 0);
    }
  };

  const changeImageByButton = (button) => {
    const scroll = document.querySelector('.lpjCeT');
    if (button === 'next') {
      scroll.scrollBy(30, 0);
    } else if (button === 'undo') {
      scroll.scrollBy(-30, 0);
    }
  };

  return (
    <CMain>
      <button type="button" onClick={() => changeImageByButton('undo')}>asssss</button>
      <CCarousel onWheel={(event) => changeImage(event)}>
        <CItem>
          <CImg src="https://images.dog.ceo/breeds/terrier-australian/n02096294_7051.jpg" />
        </CItem>
        <CItem>
          <CImg src="https://images.dog.ceo/breeds/malinois/n02105162_4200.jpg" />
        </CItem>
        <CItem>
          <CImg src="https://images.dog.ceo/breeds/weimaraner/n02092339_205.jpg" />
        </CItem>
      </CCarousel>
      <button type="button" onClick={() => changeImageByButton('next')}>asssss</button>
    </CMain>
  );
}
