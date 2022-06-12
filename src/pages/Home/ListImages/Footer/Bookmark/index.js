import React, { useState } from 'react';
import { Icon } from './styles';
import '../../../../../assets/icons/icomoon/style.css';
import { useImages } from '../../../../../context/ImagesContext';

export default function Bookmark(props) {
  const { imageUrl } = props;
  const { addLikeList, removeLikesList, checkInList } = useImages();
  const [inList, setInList] = useState(checkInList(imageUrl, 'savedList'));

  const handleChange = () => {
    if (!inList) {
      addLikeList(imageUrl, 'savedList');
      setInList(!inList);
    } else {
      removeLikesList(imageUrl, 'savedList');
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
    />
  );
}
