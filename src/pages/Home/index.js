import React, { useState } from 'react';
import Button from './styles';
import Nav from '../../components/Nav';
import ListImages from './ListImages';

export default function Home() {
  const [reload, setReload] = useState(false);

  const changeReload = () => {
    setTimeout(() => {
      setReload(true);
    });
    setReload(false);
  };

  return (
    <div>
      <Nav />
      <ListImages reload={reload} />
      <Button onClick={changeReload}>Mais imagens</Button>
    </div>
  );
}
