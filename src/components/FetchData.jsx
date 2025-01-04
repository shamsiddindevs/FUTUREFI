import { useEffect, useState } from 'react';

const FetchSwaggerData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Replace with your Swagger API URL
        fetch('https://mission.uz/en/api/v1/moduls/')
      .then(response => response.json())
      .then(json => setData(json))
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold">First Data from Swagger API</h1>
            {data ? (
                <pre className="mt-4 p-4 bg-white border">{data ? JSON.stringify(data, null, 2) : 'No data available'}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default FetchSwaggerData;
