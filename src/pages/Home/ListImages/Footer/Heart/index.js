import React, { useEffect, useState } from 'react';
import IconHeart from './styles';
import { useImages } from '../../../../../context/ImagesContext';
import '../../../../../assets/icons/icomoon/style.css';

export default function Heart(props) {
  const { imageUrl } = props;

  const { checkInList, addLikeList, removeLikesList } = useImages();
  const inList = checkInList(imageUrl);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enjoy]);

  useEffect(() => {
    checkColor();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = () => {
    if (!enjoy) {
      addLikeList(imageUrl);
      setEnjoy(!enjoy);
    } else {
      removeLikesList(imageUrl);
      setEnjoy(!enjoy);
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
