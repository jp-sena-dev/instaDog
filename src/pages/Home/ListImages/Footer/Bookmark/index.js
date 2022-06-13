import React, { useEffect, useState } from 'react';
import { Icon } from './styles';
import '../../../../../assets/icons/icomoon/style.css';
import { useImages } from '../../../../../context/ImagesContext';

export default function Bookmark(props) {
  const { imageUrl } = props;
  const { addLikeList, removeLikesList, checkInList } = useImages();
  const [inList, setInList] = useState(checkInList(imageUrl, 'savedList'));
  const [color, setColor] = useState('');

  useEffect(() => {
    if (!inList) {
      setColor('black');
    } else {
      setColor('gray');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = () => {
    if (!inList) {
      addLikeList(imageUrl, 'savedList');
      setColor('gray');
      setInList(!inList);
    } else {
      removeLikesList(imageUrl, 'savedList');
      setColor('black');
      setInList(!inList);
    }

    // setAnimation(true);
    // setTimeout(() => {
    //   setAnimation(false);
    // }, 200);
  };

  return (
    <Icon
      onClick={handleChange}
      className="icon-bookmark"
      color={color}
    />
  );
}
