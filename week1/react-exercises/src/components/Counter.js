import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? 'It is higher than 10!' : 'Keep counting...';
  return (
    <div className="counter-main">
      <h1 className="counter-title">COUNTER</h1>
      <p className="counter-para">
        You clicked <strong className={count > 10 ? 'red' : 'blue'}>{count}</strong> times ,{' '}
        <em>
          <strong className={count > 10 ? 'red' : 'blue'}>{feedback}</strong>
        </em>
      </p>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Add 1!
      </button>
    </div>
  );
}

export default Counter;
