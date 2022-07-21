import React, { useState } from 'react';
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai';
import CustomRounterLink from '../../atoms/CustomRounterLink';
import {
  Ul,
  Li,
  Icon,
  MIcon,
  DivMain,
  ItemsMenu,
} from './styles';
import '../../../assets/icons/icomoon/style.css';
import CustomLink from '../../atoms/CustomLink';

export default function Menu() {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };

  return (
    <DivMain>
      <MIcon onClick={handleChange}><AiOutlineMenu /></MIcon>
      <ItemsMenu show={show}>
        <Ul>
          <Li>
            <CustomRounterLink to="/">
              <Icon><AiFillHome /></Icon>
              Home
            </CustomRounterLink>
          </Li>
          <Li>
            <CustomRounterLink to="/salvos">
              <Icon className="icon-bookmark" />
              Salvos
            </CustomRounterLink>
          </Li>
          <Li>
            <CustomLink href="https://github.com/joaopedr0sena" target="_blank">
              <Icon>+</Icon>
              Projetos
            </CustomLink>
          </Li>
        </Ul>
      </ItemsMenu>
    </DivMain>
  );
}
