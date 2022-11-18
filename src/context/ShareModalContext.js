import React, {
  useMemo,
  useState,
  useContext,
  createContext,
} from 'react';

const ShareContext = createContext({});

export function ShareProvider({ children }) {
  const [shareImage, setShareImage] = useState('');
  const [show, setShow] = useState(false);

  const contextValue = useMemo(() => ({
    shareImage,
    setShareImage,
    show,
    setShow,
  }), [shareImage, show]);

  return (
    <ShareContext.Provider value={contextValue}>
      {children}
    </ShareContext.Provider>
  );
}

export const useShare = () => useContext(ShareContext);
