import React from 'react';
import { SDivAlert, SSection } from './styles';

export default function Alert(props) {
  const { display } = props;
  return (
    <SDivAlert display={display}>
      <SSection>Copiado...</SSection>
    </SDivAlert>
  );
}
