import React from 'react';
import { SLink } from './styles';

export default function CustomLink({
  to,
  target,
  children,
}) {
  return (
    <SLink href={to} target={target}>{children}</SLink>
  );
}
