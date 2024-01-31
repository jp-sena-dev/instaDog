import React, { useState } from 'react';
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai';
import CustomRounterLink from '../../atoms/CustomRounterLink';
import CustomLink from '../../atoms/CustomLink';
import {
  SUl,
  SLi,
  SIcon,
  SDivMain,
  SItemsMenu,
  SBurgerIcon,
} from './styles';
import '../../../assets/icons/icomoon/style.css';

export default function Menu() {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };

  return (
    <SDivMain>
      <SBurgerIcon onClick={handleChange}><AiOutlineMenu /></SBurgerIcon>
      <SItemsMenu show={show}>
        <SUl>
          <SLi>
            <CustomRounterLink to="/">
              <SIcon><AiFillHome /></SIcon>
              Home
            </CustomRounterLink>
          </SLi>
          <SLi>
            <CustomRounterLink to="/salvos">
              <SIcon className="icon-bookmark" />
              Salvos
            </CustomRounterLink>
          </SLi>
          <SLi>
            <CustomLink href="https://github.com/jp-sena-dev" target="_blank">
              <SIcon>+</SIcon>
              Projetos
            </CustomLink>
          </SLi>
        </SUl>
      </SItemsMenu>
    </SDivMain>
  );
}
