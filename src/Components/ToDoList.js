import { useState } from "react";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState({});
  const [userInput, setUserInput] = useState("");

  function addItem() {
    setToDoList({ [userInput]: false, ...toDoList });
    setUserInput("");
  }

  const listItems = Object.keys(toDoList).map((item) => (
    <li
      key={[item].toString()}
      style={toDoList[item] ? { textDecoration: "line-through" } : {}}
      onClick={() => setToDoList({ ...toDoList, [item]: !toDoList[item] })}
    >
      {item}
    </li>
  ));

  return (
    <div className="App">
      <h2>To Do List</h2>
      <input
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={addItem}>ADD</button>
      <ul>{listItems}</ul>
      <button onClick={() => setToDoList({})}>CLEAR</button>
    </div>
  );
}
