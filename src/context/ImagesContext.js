import React, {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
} from 'react';

const ImagesContext = createContext();
export const useImages = () => useContext(ImagesContext);

export default function ImagesProvider({ children }) {
  const [name, setName] = useState('');
  const changeName = useCallback((newName) => {
    if (typeof newName !== 'string') {
      throw new Error('name must be a string');
    }
    setName(newName);
  }, []);
  const contextValue = useMemo(() => ({
    name,
    changeName,
  }), [changeName, name]);

  return (
    <ImagesContext.Provider value={contextValue}>
      {children}
    </ImagesContext.Provider>
  );
}
