import React from 'react';
import { FDiv, FFooter } from './styles';

export default function Footer() {
  return (
    <FFooter>
      <FDiv>
        <a href="https://github.com/joaopedr0sena" target="_blank" rel="noreferrer">
          <p>gitHub</p>
        </a>
        <a href="https://br.linkedin.com/" target="_blank" rel="noreferrer">
          <p>linkedIn</p>
        </a>
        <a href="https://github.com/joaopedr0sena?tab=repositories" target="_blank" rel="noreferrer">
          <p>outros projetos</p>
        </a>
        <p>
          developer by:
          <a
            href="https://github.com/joaopedr0sena?tab=repositories"
            rel="noreferrer"
            target="_blank"
          >
            <span>João pedro</span>
          </a>
        </p>
      </FDiv>
    </FFooter>
  );
}
