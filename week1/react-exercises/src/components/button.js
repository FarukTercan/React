import React from 'react';

function Button() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? 'It is higher than 10!' : 'Keep counting...';
  return (
    <div>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Add 1!{' '}
      </button>
      ;
    </div>
  );
}

export default Button;
