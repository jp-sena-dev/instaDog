import React from 'react';
import { DivAlert, Section } from './styles';

export default function Alert(props) {
  const { display } = props;
  return (
    <DivAlert display={display}>
      <Section>Copiado...</Section>
    </DivAlert>
  );
}
