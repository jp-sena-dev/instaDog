import React, { useEffect, useState } from 'react';
import getImages from '../../../utils/APIs/getImages';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import { ImageUl, ImgLi } from './styles';

export default function ListImages() {
  const [imagesState, setImagesState] = useState([]);
  useEffect(() => {
    const get = async () => {
      const images = await getImages();
      setImagesState(images);
    };
    get();
  }, []);

  return (
    <div>
      <ImageUl>
        {
          imagesState && imagesState.map((imageUrl) => (
            <ImgLi key={imageUrl}>
              <Header />
              <Main imageUrl={imageUrl} />
              <Footer imageUrl={imageUrl} />
            </ImgLi>
          ))
        }
      </ImageUl>
    </div>
  );
}
