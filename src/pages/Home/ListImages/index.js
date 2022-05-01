import React, { useEffect, useState } from 'react';
import getImages from '../../../utils/APIs/getImages';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import { ImageUl, ImgLi } from './styles';

export default function ListImages(props) {
  const { reload } = props;
  const [imagesState, setImagesState] = useState([]);

  const get = async () => {
    const images = await getImages();
    setImagesState(images);
  };

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    if (reload) {
      setImagesState([]);
      get();
    }
  }, [reload]);

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
