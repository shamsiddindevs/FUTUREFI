
import { useState, useEffect } from 'react';

const FetchSwaggerData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://mission.uz/en/api/v1/appeal-categories/')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FetchSwaggerData;