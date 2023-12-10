

import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  // This function will only be re-executed if the 'data' dependency changes
  const expensiveComputation = useMemo(() => {
    console.log('Performing expensive computation...');
    // Perform some complex calculations using the 'data' prop
    return data.length * 2;
  }, [data]);

  return (
    <div>
      <p>Computed value: {expensiveComputation}</p>
    </div>
  );
};

export default MyComponent;