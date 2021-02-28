import { useState } from "react";
import Toast from "./ToastComponenets/Toast";

export default function ToastToggle() {
  const [showToast, setShowToast] = useState(false);
  return (
    <div className="App">
      <h2>Toast Magic!</h2>
      <button onClick={() => setShowToast(true)}>Show Toast</button>
      {showToast && <Toast onClick={setShowToast} />}
    </div>
  );
}
