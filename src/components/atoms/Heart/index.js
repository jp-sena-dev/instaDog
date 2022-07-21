import React, { useEffect, useState } from 'react';
import { SIconHeart } from './styles';
import '../../../assets/icons/icomoon/style.css';
import { useImages } from '../../../context/ImagesContext';

export default function Heart({ imageUrl }) {
  const { checkInList, addList, removeList } = useImages();
  const inList = checkInList(imageUrl, 'likeList');

  const [enjoy, setEnjoy] = useState(inList);
  const [animation, setAnimation] = useState(false);
  const [colorHeart, setColorHeart] = useState('');

  const checkColor = () => {
    if (enjoy) {
      setColorHeart('255 0 0');
    } else {
      setColorHeart('0 0 0');
    }
  };

  useEffect(() => {
    checkColor();
  });

  const handleChange = () => {
    if (!enjoy) {
      addList(imageUrl, 'likeList');
      setEnjoy(!enjoy);
    } else {
      removeList(imageUrl, 'likeList');
      setEnjoy(!enjoy);
    }

    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 200);
  };

  return (
    <SIconHeart
      color={colorHeart}
      animation={animation}
      onClick={handleChange}
      className="icon-heart"
    />
  );
}
