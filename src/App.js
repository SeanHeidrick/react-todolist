import React from "react";
import "./App.scss";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItems = (e) => {
    e.preventDefault();
    let newItem = { input, completed: false };
    let itemsCopy = [...items];
    itemsCopy.push(newItem);
    setItems(itemsCopy);
    console.log(items);
  };

  const deleteItem = (i) => {
    let itemsCopy = [...items];
    itemsCopy.splice(i, 1);
    setItems(itemsCopy);
  };

  return (
    <div className="app">
      <h2>Todo List</h2>
      <form onSubmit={addItems}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
      <TodoList items={items} onDelete={deleteItem} />
    </div>
  );
}

const TodoList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item, i) => {
        return (
          <li className="list-item">
            <p>{item.input}</p>
            <button onClick={() => onDelete(i)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default App;
