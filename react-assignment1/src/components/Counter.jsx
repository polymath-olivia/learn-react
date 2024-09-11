// import React from "react";
// const Counter = () => {
//   return (
//     <div>
//       <h2>Counter</h2>
//       <p>Count: 0</p>
//       <button>-</button>
//       <button>+</button>
//     </div>
//   );
// };

// export default Counter;

// import React, { useState } from "react";

// const Counter = () => {
//   const min = 0;
//   const max = 10;

//   const [count, setCount] = useState(0);

//   // ... 나머지 코드
// };

import React, { useState } from "react"; // import를 한 번만 선언

const Counter = () => {
  const min = 0;
  const max = 10;

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
