import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LUl,
  LLi,
  LImg,
  Lmain,
} from './styles';
import { useImages } from '../../../context/ImagesContext';

export default function ListImagesSaved() {
  const navigate = useNavigate();
  const { savedList } = useImages();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(savedList);
  }, [savedList]);

  const handleChangeFeed = (image) => {
    navigate(`/showImage/${savedList.indexOf(image)}`);
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
