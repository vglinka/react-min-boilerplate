import React, { useState } from 'react';

export function App() {
  const oldWorld = 'World';
  const newWorld = 'Brave New World';

  const [actualWorld, setActualWorld] = useState(oldWorld);

  const handleClick = () => {
    let v;
    if (actualWorld === oldWorld) {
      v = newWorld;
    } else {
      v = oldWorld;
    }
    setActualWorld(v);
  };

  return (
    <div className="app">
      <h1>
        Hello
        {actualWorld}!
      </h1>
      <button onClick={handleClick} type="button">
        CHANGE THE WORLD!!1
      </button>
    </div>
  );
}
