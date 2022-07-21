import React from 'react';
import ListImages from '../../components/organisms/ListImages';
import PageTemplates from '../../components/templates/Page';

export default function Home() {
  return (
    <PageTemplates
      content={<ListImages />}
    />
  );
}
