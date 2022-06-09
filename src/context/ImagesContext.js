import React, {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
  useEffect,
} from 'react';

const likeListSaved = JSON.parse(localStorage.getItem('likeList'));

const setStorage = (key, value) => {
  localStorage.setItem(`${key}`, JSON.stringify(value));
};

const ImagesContext = createContext({});

export default function ImagesProvider({ children }) {
  const [likeList, setLikeList] = useState(!likeListSaved ? [] : likeListSaved);

  const changLikeList = useCallback((item) => {
    if (typeof item !== 'string') {
      throw new Error('name must be a string');
    }
    if (!likeList.length) {
      setLikeList([item]);
    } else if (likeList.length) {
      setLikeList([item, ...likeList]);
    }
  }, [likeList]);

  useEffect(() => {
    setStorage('likeList', likeList);
  }, [likeList]);

  const contextValue = useMemo(() => ({
    likeList,
    changLikeList,
  }), [changLikeList, likeList]);

  return (
    <ImagesContext.Provider value={contextValue}>
      {children}
    </ImagesContext.Provider>
  );
}

export const useImages = () => useContext(ImagesContext);
