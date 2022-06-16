import React, { useEffect, useState } from 'react';
import {
  LUl,
  LLi,
  LImg,
  Lmain,
} from './styles';
import { useImages } from '../../../context/ImagesContext';
import Carousel from '../../../components/Carousel';

export default function ListImagesSaved() {
  const { savedList } = useImages();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(savedList);
  }, [savedList]);

  return (
    <Lmain>
      <LUl>
        {list.map((image) => (
          <LLi key={image} onClick={() => console.log('olá')}>
            <LImg src={image} alt="ft-salva" />
          </LLi>
        ))}
      </LUl>
      <Carousel />
    </Lmain>
  );
}
