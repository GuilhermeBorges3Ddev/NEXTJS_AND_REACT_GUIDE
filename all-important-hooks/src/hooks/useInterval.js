import { useEffect, useRef } from 'react';

export const useInterval = (callbackFunc, intervalTime = 1000) => {
  const savedCallbackFunc = useRef(() => {});

  useEffect(() => {
    savedCallbackFunc.current = callbackFunc;
  }, [callbackFunc]);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      savedCallbackFunc.current();
    }, intervalTime);
    return () => clearInterval(intervalRef);
  }, [intervalTime]);
};
