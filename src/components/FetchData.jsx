import { useState } from "react";


const FetchSwaggerData = () => {
  const [data, setData] = useState(null);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(`https://petstore.swagger.io/v2/store/order/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="bg-slate-400  flex justify-center items-center gap-5 p-4">
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
        className="input input-bordered w-full max-w-xs  "
      />
      <button onClick={fetchData} className="btn btn-primary">
        Fetch Data
      </button>
      {loading ? (
        <div className="mt-4">Loading...</div>
      ) : (
        data && <code className="block mt-4">{JSON.stringify(data)}</code>
      )}
    </div>
  );
};

export default FetchSwaggerData;
