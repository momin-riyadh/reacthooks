import React, { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
const [isFetching, setIsFetching] = useState(false);

useEffect(() => {
const handleScroll = () => {
if (
window.innerHeight + document.documentElement.scrollTop >=
document.documentElement.offsetHeight
) {
setIsFetching(true);
}
};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

useEffect(() => {
if (!isFetching) return;

    callback();
    setIsFetching(false);
}, [isFetching, callback]);

return isFetching;
};

function App() {
const [data, setData] = useState([]);
const [page, setPage] = useState(1);

const fetchData = () => {
// Simulating API call or fetching new data
setTimeout(() => {
const newData = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
setData(prevData => [...prevData, ...newData]);
setPage(prevPage => prevPage + 1);
}, 2000);
};

const isFetching = useInfiniteScroll(fetchData);

return (
<div>
{data.map((item, index) => (
<p key={index}>{item}</p>
))}
{isFetching && <p>Loading more...</p>}
</div>
);
}

export default App;