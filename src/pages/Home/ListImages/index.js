import React, { useEffect, useState } from 'react';
import getImages from '../../../utils/APIs/getImages';

export default function ListImages() {
  const [imagesState, setImagesState] = useState([]);
  useEffect(() => {
    const get = async () => {
      const images = await getImages(20);
      setImagesState(images);
    };
    get();
  }, []);
  return (
    <div>
      <ul>
        {
          imagesState && imagesState.map((src) => (
            <li key={src}>
              <div>
                <img src={src} alt={`${src}`} width="100px" />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
