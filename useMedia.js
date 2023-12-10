import React, { useState, useEffect } from 'react';

const useMedia = (query) => {
const [matches, setMatches] = useState(false);

useEffect(() => {
const mediaQuery = window.matchMedia(query);
const updateMatches = () => setMatches(mediaQuery.matches);

    mediaQuery.addListener(updateMatches);
    updateMatches();

    return () => {
      mediaQuery.removeListener(updateMatches);
    };
}, [query]);

return matches;
};

function App() {
const isMobile = useMedia('(max-width: 767px)');

return (
<div>
{isMobile ? <p>Mobile View</p> : <p>Desktop View</p>}
</div>
);
}

export default App;