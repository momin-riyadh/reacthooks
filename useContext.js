import React, { useContext } from 'react';

// Create a context
const MyContext = React.createContext();

// Create a provider component for the context
const MyProvider = ({ children }) => {
  const value = 'Hello, world!';

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

const MyComponent = () => {
  // Consume the value from the context
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>Value from context: {contextValue}</p>
    </div>
  );
};

const App = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

export default App;