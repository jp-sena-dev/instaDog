import React from 'react';
import { useParams } from 'react-router-dom';
import ShowImage from '../../components/organisms/ShowImage';
import PageTemplates from '../../components/templates/Page';

export default function ShowImages() {
  const { image } = useParams();

  return (
    <PageTemplates content={<ShowImage image={image} />} />
  );
}
