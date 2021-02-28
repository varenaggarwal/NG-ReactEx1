import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <input type="button" value="+" onClick={() => setCount(count + 1)} />
      <span> {count} </span>
      <input type="button" value="-" onClick={() => setCount(count - 1)} />
    </div>
  );
}
