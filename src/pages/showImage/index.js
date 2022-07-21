import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useImages } from '../../context/ImagesContext';
import Main from '../../components/MainItemFeed';
import Header from '../../components/HeaderItemImg';
import ListFooterItemImg from '../../components/FooterItemFeed';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { SImageDiv } from './styles';

export default function ShowImage() {
  const { image } = useParams();
  const { savedList } = useImages();
  const [imageUrl] = useState(savedList[image]);
  console.log(savedList[image]);

  return (
    <div>
      <Nav />
      <SImageDiv>
        <Header />
        <Main imageUrl={imageUrl} />
        <ListFooterItemImg imageUrl={imageUrl} />
      </SImageDiv>
      <Footer />
    </div>
  );
}
