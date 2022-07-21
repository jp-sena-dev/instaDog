import React from 'react';
import CustomLink from '../../atoms/CustomLink';
import { SDiv, SFooter, SParagraph } from './styles';

export default function Footer() {
  return (
    <SFooter>
      <SDiv>
        <CustomLink
          to="https://github.com/joaopedr0sena"
          target="_blank"
        >
          gitHub
        </CustomLink>
        <CustomLink
          to="https://br.linkedin.com/"
          target="_blank"
        >
          linkedIn
        </CustomLink>
        <CustomLink
          to="https://github.com/joaopedr0sena?tab=repositories"
          target="_blank"
        >
          outros projetos
        </CustomLink>
        <SParagraph>
          developer by:
          <CustomLink
            to="https://github.com/joaopedr0sena?tab=repositories"
            target="_blank"
          >
            João pedro
          </CustomLink>
        </SParagraph>
      </SDiv>
    </SFooter>
  );
}
