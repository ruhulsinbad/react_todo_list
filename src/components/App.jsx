import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const currentValue = event.target.value;
    setInputValue(currentValue);
  }

  function addItem() {
    setItems((prev) => {
      return [...prev, inputValue];
    });

    setInputValue("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((list) => {
            return <li> {list} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
