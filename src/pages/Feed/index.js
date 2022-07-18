import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ListImagesFeed from '../../components/ListImagesFeed';
import { useImages } from '../../context/ImagesContext';

export default function Feed() {
  const navigate = useNavigate();
  const { list, initialImg } = useParams();
  const { savedList, likeList } = useImages();
  const [listFeed, setListFeed] = useState([]);

  useEffect(() => {
    if (list === 'savedList') {
      setListFeed(savedList);
    } else if (list === 'likeList') {
      setListFeed(likeList);
    }
    navigate(`/feed/likeList/${initialImg}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListImagesFeed feed={listFeed} initialImg={initialImg} />
  );
}
