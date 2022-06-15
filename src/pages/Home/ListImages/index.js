import React, { useEffect, useState } from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import getImages from '../../../utils/APIs/getImages';
import { useImages } from '../../../context/ImagesContext';
import {
  ImgLi,
  ImageUl,
  Loading,
  DivObserver,
} from './styles';

export default function ListImages() {
  const [loading, setLoading] = useState(true);
  const { feed, addList } = useImages();
  const [currentPage, setCurrentPage] = useState(0);

  const get = async (list) => {
    if (!list.length) {
      const images = await getImages();
      addList(images, 'feed');
    } else {
      const images = await getImages();
      console.log([...list, ...images]);
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

  if (!loading && !feed.length) {
    return (
      <div>
        <Loading />
        <DivObserver className="observer" />
      </div>
    );
  }

  return (
    <div>
      <ImageUl>
        {
          feed && feed.map((imageUrl) => (
            <ImgLi key={imageUrl}>
              <Header />
              <Main imageUrl={imageUrl} />
              <Footer imageUrl={imageUrl} />
            </ImgLi>
          ))
        }
      </ImageUl>
      <DivObserver className="observer" />
    </div>
  );
}
