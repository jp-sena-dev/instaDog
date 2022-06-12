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
  const [savedList, setSavedList] = useState(!likeListSaved ? [] : likeListSaved);

  const addLikeList = useCallback((item, list) => {
    if (list === 'likeList') {
      if (!likeList.length) {
        setLikeList([item]);
      } else if (likeList.length) {
        setLikeList([item, ...likeList]);
      }
    } else if (list === 'savedList') {
      if (!savedList.length) {
        setSavedList([item]);
      } else if (savedList.length) {
        setSavedList([item, ...likeList]);
      }
    }
  }, [likeList, savedList]);

  const removeLikesList = useCallback((item) => {
    const editedList = [];
    likeList.map((element) => {
      if (element !== item) {
        editedList.push(element);
      }
      return item;
    });
    setLikeList(editedList);
  }, [likeList]);

  useEffect(() => {
    setStorage('likeList', likeList);
  }, [likeList]);

  useEffect(() => {
    setStorage('savedList', savedList);
  }, [savedList]);

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
