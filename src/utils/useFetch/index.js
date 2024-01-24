import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export default function useFetchQuery(word) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (word !== "") {
      // Fetching data from API
      (async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(word);
          setResult(response.data[0]);
        } catch (error) {
          // If word not found
          if (error.response.status === 404) {
            const result = { status: 404, ...error.response.data };
            setResult(result);
          }
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [word]);

  return { result, isLoading };
}
