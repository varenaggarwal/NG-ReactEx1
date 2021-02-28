import { useState } from "react";

export default function App() {
  // const [list, setList] = useState(["Apple", "Orange", "Grapes", "Mango"]);
  const [list, setList] = useState({
    Apple: false,
    Orange: false,
    Grapes: false,
    Mango: false
  });
  function likeButton(item) {
    setList({ ...list, [item]: !list[item] });
  }
  return (
    <div className="App">
      <h1>Like in a list</h1>
      <ul>
        {Object.keys(list).map((item) => (
          <li>
            {item}
            <button onClick={() => likeButton(item)}>
              <span>👍</span>
            </button>
            <span>{list[item] ? "Liked" : ""}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
