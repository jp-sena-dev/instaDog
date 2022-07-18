import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Page from './pages';
import ImagesProvider from './context/ImagesContext';

export default function App() {
  return (
    <ImagesProvider>
      <Routes>
        <Route path="/Feed/:list/:initialImg" element={<Page.Feed />} />
        <Route path="/salvos" element={<Page.Saved />} />
        <Route path="/" element={<Page.Home />} />
      </Routes>
    </ImagesProvider>
  );
}
