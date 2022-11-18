import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Page from './pages';
import ImagesProvider from './context/ImagesContext';
import { GlobalStyle } from './styles/global';
import Share from './components/organisms/ShareModal';
import { ShareProvider } from './context/ShareModalContext';

export default function App() {
  return (
    <ImagesProvider>
      <ShareProvider>
        <Share />
        <Routes>
          <Route path="/showImage/:image" element={<Page.ShowImages />} />
          <Route path="/salvos" element={<Page.Saved />} />
          <Route path="/" element={<Page.Home />} />
        </Routes>
        <GlobalStyle />
      </ShareProvider>
    </ImagesProvider>
  );
}
