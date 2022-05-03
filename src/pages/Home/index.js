import React, { useEffect, useState } from 'react';
import { useImages } from '../../context/ImagesContext';
import Button from './styles';
import ListImages from './ListImages';

export default function Home() {
  const { name, changeName } = useImages();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    changeName('eric');
    console.log(name);
  }, [name, changeName]);

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
