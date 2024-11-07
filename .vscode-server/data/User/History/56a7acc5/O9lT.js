import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoadind] = useState(false);
  const [error, setError] = useState("");

  const fetching = () => {
    try {
      setIsLoadind(true);
    } catch (e) {
    } finally {
        setIsLoadind(false)
    }
  };
};
