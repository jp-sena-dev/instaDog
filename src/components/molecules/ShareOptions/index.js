import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { SOptionsContainer, SCopyContainer } from './styles';
import IconShare from '../../atoms/IconShare';

export default function ShareOptions({ shareImage }) {
  const links = {
    facebook: {
      link: `https://www.facebook.com/sharer/sharer.php?u=https://insta-dog.vercel.app/showImage/${shareImage}`,
      icon: <FaFacebook />,
    },
    whatsApp: {
      link: `https://api.whatsapp.com/send?text=https://insta-dog.vercel.app/showImage/${shareImage}`,
      icon: <IoLogoWhatsapp />,
    },
    twitter: {
      link: `https://twitter.com/intent/tweet?url=https://insta-dog.vercel.app/showImage/${shareImage}`,
      icon: <FaTwitter />,
    },
  };

  return (
    <>
      <SOptionsContainer>
        {Object.entries(links).map(([itemKey, item]) => (
          <IconShare key={itemKey} link={item.link} display={item.icon} />
        ))}
      </SOptionsContainer>
      <SCopyContainer>
        <input defaultValue={shareImage} />
        <button
          onClick={() => navigator.clipboard.writeText(`${shareImage}`)}
          type="button"
        >
          copiar
        </button>
      </SCopyContainer>
    </>
  );
}
