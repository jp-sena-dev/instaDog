import React from 'react';
import CustomRounterLink from '../../atoms/CustomRounterLink';
import { Div, SWrapper } from './styles';
import Menu from '../../molecules/Menu';

export default function Nav() {
  return (
    <Div>
      <SWrapper>
        <CustomRounterLink to="/">
          <h1>Dogs</h1>
        </CustomRounterLink>
      </SWrapper>
      <Menu />
    </Div>
  );
}
