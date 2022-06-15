import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ListImagesSaved from './ListImagesSaved';

export default function Saved() {
  return (
    <div>
      <Nav />
      <ListImagesSaved />
      <Footer />
    </div>
  );
}
