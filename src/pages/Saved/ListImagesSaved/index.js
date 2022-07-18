import React, { useEffect, useState } from 'react';
import {
  LUl,
  LLi,
  LImg,
  Lmain,
} from './styles';
import { useImages } from '../../../context/ImagesContext';

export default function ListImagesSaved() {
  const { savedList } = useImages();
  const [list, setList] = useState([]);
  const [initialImg, setInitialImg] = useState('');

  useEffect(() => {
    setList(savedList);
  }, [savedList]);

  const handleChangeFeed = (image) => {
    setInitialImg(image);
    console.log(initialImg);
  };

  return (
    <Lmain>
      <LUl>
        {list.map((image) => (
          <LLi key={image} onClick={() => handleChangeFeed(image)}>
            <LImg src={image} alt="ft-salva" />
          </LLi>
        ))}
      </LUl>
    </Lmain>
  );
}
