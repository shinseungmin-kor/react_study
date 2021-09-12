import React, { useState }from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 2);
  }
  const clickString = props.click || 'click'

  return (
      <button onClick={increment}>
          {clickString}
          </button>
  );
}

export default Counter