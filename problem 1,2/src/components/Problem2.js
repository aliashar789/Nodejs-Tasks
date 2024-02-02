import React, { useState, useEffect } from "react";

const Problem2 = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);

        if (!response.ok && !response?.status === 200) {
          setError(`HTTP error! Status: ${response?.status}`);
          setLoading(false);
        }

        if (response?.status === 200) {
          const data = await response.json();
          setFetchedData(data);
          setLoading(false);
          return data;
        }
      } catch (error) {
        setLoading(false);
        setError(error?.message);
        return null;
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{loading ? "Fetching data, please wait..." : "Fetched Data:"}</h1>
      {fetchedData ? (
        <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Problem2;
