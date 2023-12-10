import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
const { data, error } = useSWR('https://api.example.com/data', fetcher);

if (error) {
return <div>Error fetching data</div>;
}

if (!data) {
return <div>Loading...</div>;
}

return (
<div>
<h1>Data: {data}</h1>
</div>
);
}

export default App;