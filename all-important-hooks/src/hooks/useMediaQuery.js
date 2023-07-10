import { useDebugValue, useEffect, useState } from 'react';

export const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);
  useDebugValue(queryValue);
  useEffect(() => {
    let isMounted = true;
    const mediaMatch = window.matchMedia(queryValue);
    const handleQueryChange = () => {
      if (!isMounted) return;
      setMatch(!!mediaMatch.matches);
    };
    mediaMatch.addListener(handleQueryChange);
    setMatch(!!mediaMatch.matches);
    return () => {
      isMounted = false;
      mediaMatch.removeListener(handleQueryChange);
    };
  }, [queryValue]);
  return match;
};
