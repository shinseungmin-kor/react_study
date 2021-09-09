import React, { useEffect, useState } from 'react';
import Counter from './components/counter';
 
function App() {
  const [buttonName, setButtonName] = useState('클릭')

  const clickButton = () => {
    setButtonName('click')
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <Counter click="click" />
      <Counter click={buttonName} />
      <Counter />
      <button onClick={clickButton}>Click</button>
    </div>
  );
}

export default App;
