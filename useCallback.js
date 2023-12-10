import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // This callback function will only be re-created if 'count' changes
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    setCount(prevCount => prevCount + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MyComponent;