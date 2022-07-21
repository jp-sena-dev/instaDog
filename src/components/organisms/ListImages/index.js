import React, { useEffect, useState } from 'react';
import MainImage from '../../molecules/MainImage';
import HeaderImage from '../../molecules/HeaderImage';
import FooterImage from '../../molecules/FooterImage';
import getImages from '../../../utils/APIs/getImages';
import { useImages } from '../../../context/ImagesContext';
import {
  SLoading,
  SImageLi,
  SImagesUl,
  SImagesDiv,
  SDivObserver,
} from './styles';

export default function ListImages() {
  const { feed, addList } = useImages();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const get = async (list) => {
    if (!list) {
      const images = await getImages();
      addList(images, 'feed');
    } else {
      const images = await getImages();
      addList([...list, ...images], 'feed');
    }
  };

  useEffect(() => {
    get(feed);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => (entry.isIntersecting))) {
        setCurrentPage((currentValue) => (currentValue + 1));
      }
    });
    intersectionObserver.observe(document.querySelector('.observer'));
    return () => intersectionObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!feed) {
      setLoading(false);
    }
  }, [feed]);

  if (!loading && !feed) {
    return (
      <div>
        <SLoading />
        <SDivObserver className="observer" />
      </div>
    );
  }

  return (
    <SImagesDiv>
      <SImagesUl>
        {
          feed && feed.map((imageUrl) => (
            <SImageLi key={imageUrl}>
              <HeaderImage />
              <MainImage imageUrl={imageUrl} />
              <FooterImage imageUrl={imageUrl} />
            </SImageLi>
          ))
        }
      </SImagesUl>
      <SDivObserver className="observer" />
    </SImagesDiv>
  );
}
