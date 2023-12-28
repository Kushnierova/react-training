import { useState, useEffect } from 'react';

const useLocalStorage = (
  key,
  defaultValue
  // serialize = JSON.stringify,
  // deserialize = JSON.parse
) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default useLocalStorage;
