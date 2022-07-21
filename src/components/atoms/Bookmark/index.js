import React, { useEffect, useState } from 'react';
import { SIcon } from './styles';
import '../../../assets/icons/icomoon/style.css';
import { useImages } from '../../../context/ImagesContext';

export default function Bookmark({ imageUrl }) {
  const { addList, removeList, checkInList } = useImages();
  const [inList, setInList] = useState(checkInList(imageUrl, 'savedList'));
  const [color, setColor] = useState('');

  useEffect(() => {
    if (!inList) {
      setColor('black');
    } else {
      setColor('gray');
    }
  }, [inList]);

  const handleChange = () => {
    if (!inList) {
      addList(imageUrl, 'savedList');
      setColor('gray');
      setInList(!inList);
    } else {
      removeList(imageUrl, 'savedList');
      setColor('black');
      setInList(!inList);
    }
  };

  return (
    <SIcon
      onClick={handleChange}
      className="icon-bookmark"
      color={color}
    />
  );
}
