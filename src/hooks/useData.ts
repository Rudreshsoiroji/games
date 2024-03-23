import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

export default function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    apiClient
      .get<FetchDataResponse<T>>(endpoint)
      .then((res) => setData(res.data.results));
  }, []);
  return data;
}
