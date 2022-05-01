import React, { useEffect, useState } from 'react';
import IconHeart from './styles';
import '../../../../../assets/icons/icomoon/style.css';

export default function Heart() {
  const [enjoy, setEnjoy] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [colorHeart, setColorHeart] = useState('');

  useEffect(() => {
    setColorHeart('black');
  }, []);

  const handleChange = () => {
    setEnjoy(!enjoy);
    if (!enjoy) {
      setColorHeart('255 0 0');
    } else {
      setColorHeart('0 0 0');
    }
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 200);
  };

  return (
    <IconHeart
      color={colorHeart}
      animation={animation}
      onClick={handleChange}
      className="icon-heart"
    />
  );
}
