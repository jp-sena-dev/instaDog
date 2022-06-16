import React from 'react';
import Nav from '../../components/Nav';
import ListImages from './ListImages';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
      <Nav />
      <ListImages />
      <Footer />
    </div>
  );
}
