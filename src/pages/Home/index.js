import React, { useState } from 'react';
import ListImages from './ListImages';
import Button from './styles';

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
      <h2>Home</h2>
      <ListImages reload={reload} />
      <Button onClick={changeReload}>Mais imagens</Button>
    </div>
  );
}
