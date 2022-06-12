import React from 'react';
import { Div, H1Dog, H1Link } from './styles';
import Menu from './Menu';

export default function Nav() {
  return (
    <Div>
      <H1Link to="/">
        <H1Dog>Dogs</H1Dog>
      </H1Link>
      <Menu />
    </Div>
  );
}
