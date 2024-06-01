import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = (i) => {
    setCount(count + i);
  };

  const decrement = (d) => {
    if (count === -0) {
      setCount(0);
    } else {
      setCount(count - d);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <main className="container">
      <div className="wrapper">
        <h1 className="heading">counter</h1>

        <div className="display-wrapper">
          <div className="display">{count}</div>
        </div>
        <div className="buttons-wrapper">
          <button
            onClick={() => decrement(1)}
            className="action-button value-decrement"
          >
            -
          </button>

          <button onClick={() => reset()} className="action-button value-reset">
            Reset
          </button>

          <button
            onClick={() => increment(1)}
            className="action-button value-increment"
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
