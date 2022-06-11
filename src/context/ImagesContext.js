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

  const addLikeList = useCallback((item) => {
    if (typeof item !== 'string') {
      throw new Error('name must be a string');
    }
    if (!likeList.length) {
      setLikeList([item]);
    } else if (likeList.length) {
      setLikeList([item, ...likeList]);
    }
  }, [likeList]);

  const removeLikesList = useCallback((item) => {
    const editedList = [];
    likeList.map((element) => {
      if (element !== item) {
        editedList.push(item);
      }
      return item;
    });
    setLikeList(editedList);
  }, [likeList]);

  useEffect(() => {
    setStorage('likeList', likeList);
  }, [likeList]);

  const checkInList = useCallback((item) => {
    let thereIs = false;
    likeList.forEach((element) => {
      if (element === item) {
        thereIs = true;
      }
    });
    return thereIs;
  }, [likeList]);

  const contextValue = useMemo(() => ({
    likeList,
    checkInList,
    addLikeList,
    removeLikesList,
  }), [addLikeList, checkInList, likeList, removeLikesList]);

  return (
    <ImagesContext.Provider value={contextValue}>
      {children}
    </ImagesContext.Provider>
  );
}

export const useImages = () => useContext(ImagesContext);
