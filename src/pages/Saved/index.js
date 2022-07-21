import React from 'react';
import PageTemplates from '../../components/templates/Page';
import ListImageSaved from '../../components/organisms/ListImageSaved';

export default function Saved() {
  return (
    <PageTemplates
      content={<ListImageSaved />}
    />
  );
}
