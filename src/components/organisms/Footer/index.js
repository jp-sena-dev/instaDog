import React from 'react';
import CustomLink from '../../atoms/CustomLink';
import { SDiv, SFooter, SParagraph } from './styles';

export default function Footer() {
  return (
    <SFooter>
      <SDiv>
        <CustomLink
          to="https://github.com/jp-sena-dev"
          target="_blank"
        >
          gitHub
        </CustomLink>
        <CustomLink
          to="https://www.linkedin.com/in/jp-sena-dev/"
          target="_blank"
        >
          linkedIn
        </CustomLink>
        <CustomLink
          to="https://github.com/jp-sena-dev?tab=repositories"
          target="_blank"
        >
          outros projetos
        </CustomLink>
        <SParagraph>
          developer by:
          <CustomLink
            to="https://www.linkedin.com/in/jp-sena-dev/"
            target="_blank"
          >
            João pedro
          </CustomLink>
        </SParagraph>
      </SDiv>
    </SFooter>
  );
}
