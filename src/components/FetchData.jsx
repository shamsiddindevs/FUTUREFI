import {useState, useEffect} from "react";

const FetchSwaggerData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://petstore.swagger.io/v2/pet/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <div>{data ? <code>{JSON.stringify(data)}</code> : <div>Loading...</div>}</div>;
};

export default FetchSwaggerData;
