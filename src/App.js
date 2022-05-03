import React from 'react';
import ImagesProvider from './context/ImagesContext';
import Home from './pages/Home';

export default function App() {
  return (
    <ImagesProvider>
      <Home />
    </ImagesProvider>
  );
}
