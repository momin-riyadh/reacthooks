import React from 'react';
import { useSpring, animated } from 'react-spring';

const MyComponent = () => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div style={styles}>
      <h1>Hello, React Spring!</h1>
    </animated.div>
  );
};

export default MyComponent;