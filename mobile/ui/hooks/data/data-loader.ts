import { useCallback, useEffect, useState } from "react";

export type DataLoaderErrorMessage = {
  hasError: boolean;
  message: string | undefined;
  name: string | undefined;
};

export type DataLoaderProps<T> = {
  error: DataLoaderErrorMessage;
  isLoading: boolean;
  response: T | undefined;
};

export default <T>(dataLoaderFunction: any): DataLoaderProps<T> => {
  const [response, setResponse] = useState<T>();

  const [isLoading, setLoader] = useState<boolean>(true);

  const [error, setError] = useState<DataLoaderErrorMessage>();

  const asyncFunction = useCallback(async () => {
    dataLoaderFunction()
      .then((data: T) => setResponse(data))
      .catch((e: DataLoaderErrorMessage) => setError(e))
      .finally(() => setLoader(false));
  }, []);

  useEffect(() => {
    asyncFunction();
  }, []);

  return {
    error: {
      hasError: !!error,
      message: error?.message,
      name: error?.name,
    },
    isLoading,
    response,
  };
};
