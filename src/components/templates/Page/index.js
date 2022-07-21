import React from 'react';
import Nav from '../../organisms/Nav';
import Footer from '../../organisms/Footer';

export default function PageTemplates({ content }) {
  return (
    <div>
      <Nav />
      {content}
      <Footer />
    </div>
  );
}
