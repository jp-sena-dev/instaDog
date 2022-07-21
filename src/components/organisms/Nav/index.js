import React from 'react';
import CustomRounterLink from '../../atoms/CustomRounterLink';
import { SDiv, SWrapper } from './styles';
import Menu from '../../molecules/Menu';

export default function Nav() {
  return (
    <SDiv>
      <SWrapper>
        <CustomRounterLink to="/">
          <h1>Dogs</h1>
        </CustomRounterLink>
      </SWrapper>
      <Menu />
    </SDiv>
  );
}
