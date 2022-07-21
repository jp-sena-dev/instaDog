import React from 'react';
import { SRounterLink } from './styles';

export default function CustomRounterLink({ to, children }) {
  return (
    <SRounterLink to={to}>{children}</SRounterLink>
  );
}
