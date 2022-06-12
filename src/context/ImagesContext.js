import React, {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
  useEffect,
} from 'react';

const likeListSaved = JSON.parse(localStorage.getItem('likeList'));
const listBookeMarkSaved = JSON.parse(localStorage.getItem('savedList'));

const setStorage = (key, value) => {
  localStorage.setItem(`${key}`, JSON.stringify(value));
};

const ImagesContext = createContext({});

export default function ImagesProvider({ children }) {
  const [likeList, setLikeList] = useState(!likeListSaved ? [] : likeListSaved);
  const [savedList, setSavedList] = useState(!listBookeMarkSaved ? [] : listBookeMarkSaved);

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
        setSavedList([item, ...savedList]);
      }
    }
  }, [likeList, savedList]);

  const removeLikesList = useCallback((item, list) => {
    const editedList = [];
    let thisList = [];

    if (list === 'likeList') {
      thisList = likeList;
    } else if (list === 'savedList') {
      thisList = savedList;
    }

    thisList.map((element) => {
      if (element !== item) {
        editedList.push(element);
      }
      return item;
    });

    if (list === 'likeList') {
      setLikeList(editedList);
    } else if (list === 'savedList') {
      setSavedList(editedList);
    }
  }, [likeList, savedList]);

  useEffect(() => {
    setStorage('likeList', likeList);
  }, [likeList]);

  useEffect(() => {
    setStorage('savedList', savedList);
  }, [savedList]);

  const checkInList = useCallback((item, list) => {
    let thereIs = false;
    let thisList = [];

    if (list === 'likeList') {
      thisList = likeList;
    } else if (list === 'savedList') {
      thisList = savedList;
    }

    thisList.forEach((element) => {
      if (element === item) {
        thereIs = true;
      }
    });

    return thereIs;
  }, [likeList, savedList]);

  const contextValue = useMemo(() => ({
    likeList,
    checkInList,
    addLikeList,
    removeLikesList,
    listBookeMarkSaved,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [addLikeList, checkInList, likeList, removeLikesList, listBookeMarkSaved]);

  return (
    <ImagesContext.Provider value={contextValue}>
      {children}
    </ImagesContext.Provider>
  );
}

export const useImages = () => useContext(ImagesContext);
