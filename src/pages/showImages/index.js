import React from 'react';
import { useParams } from 'react-router-dom';
import ShowImage from '../../components/organisms/ShowImage';
import PageTemplates from '../../components/templates/Page';
import { fixUrl } from '../../utils/urlImages';

export default function ShowImages() {
  const { image } = useParams();
  const url = fixUrl(image);

  return (
    <PageTemplates content={<ShowImage image={url} />} />
  );
}
