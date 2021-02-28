import { useState } from "react";

export default function CharacterCount() {
  const [charCount, setCharCount] = useState(0);
  function characterCount(event) {
    let userInput = event.target.value;
    setCharCount(userInput.length);
  }
  return (
    <div className="App">
      <h1>Twitter Post</h1>
      <textarea style={{ height: 100, width: 400 }} onChange={characterCount} />
      <h2 style={charCount > 280 ? { color: "red" } : {}}>
        Character Count: {charCount}
      </h2>
      <button disabled={charCount > 280}>Post</button>
    </div>
  );
}
