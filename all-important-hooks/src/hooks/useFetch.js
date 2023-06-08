import { useCallback, useEffect, useState } from 'react';

export const useFetch = (asyncFunction, shouldRun) => {
  const [fetchState, setFetchState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(() => {
    setFetchState({
      result: null,
      error: null,
      status: 'pending',
    });
    return asyncFunction()
      .then((response) => {
        setFetchState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((error) => {
        setFetchState({
          result: null,
          error: error,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) run();
  }, [run, shouldRun]);

  return {
    run,
    result: fetchState.data,
    error: fetchState.error,
    status: fetchState.status,
  };
};
