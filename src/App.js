import React, { useEffect, useState } from 'react';

 
function App() {
  const [count, setCount] = useState(0);
  const [counted, setCounted] = useState(0);

  useEffect(() => {
    console.log(count)
    console.log(counted)
  },[count, counted])

  useEffect(() => {
    console.log('first rendering')
  }, []);
 
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={increment}>Click</button>
      <button onClick={() => setCounted(counted + 1)}>Click2</button>
    </div>
  );
}

export default App;
