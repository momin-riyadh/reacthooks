import React, { useState } from 'react';

const useUndo = (initialValue) => {
const [value, setValue] = useState(initialValue);
const [undoValue, setUndoValue] = useState(null);

const undo = () => {
setValue(undoValue);
setUndoValue(null);
};

const set = (newValue) => {
setUndoValue(value);
setValue(newValue);
};

return [value, set, undo];
};

function App() {
const [count, setCount, undoCount] = useUndo(0);

const handleIncrement = () => {
setCount(count + 1);
};

return (
<div>
<h1>Count: {count}</h1>
<button onClick={handleIncrement}>Increment</button>
<button onClick={undoCount}>Undo</button>
</div>
);
}

export default App;