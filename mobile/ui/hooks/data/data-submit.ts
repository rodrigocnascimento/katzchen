import { useState } from "react";

export type DataSubmitErrorMessage = {
  hasError: boolean;
  message: string | undefined;
  name: string | undefined;
};

type DataSubmitProps<T> = {
  error: DataSubmitErrorMessage;
  isSubmittingData: boolean;
  response: T | undefined;
  onSubmit: any;
};

export default <T>(): DataSubmitProps<T> => {
  const [response, setResponse] = useState<T>();

  const [isSubmittingData, setDataSubmitting] = useState<boolean>(false);

  const [error, setError] = useState<DataSubmitErrorMessage>();

  return {
    error: {
      hasError: !!error,
      message: error?.message,
      name: error?.name,
    },
    isSubmittingData,
    response,
    onSubmit: async (onSubmitFn: any) => {
      setDataSubmitting(true);

      onSubmitFn()
        .then((response: T) => setResponse(response))
        .catch((e: DataSubmitErrorMessage) => setError(e))
        .finally(() => setDataSubmitting(false));
    },
  };
};
