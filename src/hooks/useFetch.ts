// src/hooks/useFetch.js
import pb from "@/pocketbase";
import { RecordModel } from "pocketbase";
import { useState, useEffect } from "react";
const useFetch = (
  collectionName: string,
  id?: string | null,
  expandFields = ""
) => {
  const [data, setData] = useState<RecordModel | RecordModel[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = id
          ? await pb
              .collection(collectionName)
              .getOne(id, { expand: expandFields })
          : await pb
              .collection(collectionName)
              .getFullList({ expand: expandFields });
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, id, expandFields]);

  return { data, loading, error };
};

export default useFetch;
