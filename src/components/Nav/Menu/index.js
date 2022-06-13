import React, { useState } from 'react';
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai';
import {
  Ul,
  Li,
  MA,
  Icon,
  MIcon,
  MLink,
  DivMain,
  ItemsMenu,
  Paragraph,
} from './styles';
import '../../../assets/icons/icomoon/style.css';

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
            <MLink to="/">
              <Icon><AiFillHome /></Icon>
              <Paragraph>Home</Paragraph>
            </MLink>
          </Li>
          <Li>
            <MLink to="/salvos">
              <Icon className="icon-bookmark" />
              <Paragraph>Salvos</Paragraph>
            </MLink>
          </Li>
          <Li>
            <MA href="https://github.com/joaopedr0sena" target="_blank">
              <Icon>+</Icon>
              <Paragraph>Projetos</Paragraph>
            </MA>
          </Li>
        </Ul>
      </ItemsMenu>
    </DivMain>
  );
}
