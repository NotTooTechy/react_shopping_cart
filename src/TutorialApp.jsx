import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setKount] = useState(10);
  const [fruit, setFruit] = useState('orange');

  function getFruit(){
    if(fruit !== "apple"){
      setFruit("apple");
    }else{
      setFruit("bannana");
    }
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setKount(count + 1)}>
        Click me
      </button>
      <p onClick={getFruit}>{fruit}</p>
    </div>
  );
}

export default Example;

/*
Hooks are functions that let you “hook into” React state and lifecycle features from function components.
Hooks don’t work inside classes — they let you use React without classes.
*/
