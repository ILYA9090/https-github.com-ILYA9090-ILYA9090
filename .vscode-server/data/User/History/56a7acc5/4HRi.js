import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoadind] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLoadind(true);
      await callback();
    } catch (e) {
        setError(e.message);
    } finally {
        setIsLoadind(false)
    }
  };
};
