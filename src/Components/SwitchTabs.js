import { useState } from "react";
import About from "./SwitchTabComponents/About";
import Home from "./SwitchTabComponents/Home";
import Profile from "./SwitchTabComponents/Profile";

export default function SwitchTabs() {
  const [viewState, setViewState] = useState("Home");
  const views = ["Home", "About", "Profile"];

  return (
    <div className="App">
      <h1>Switch Tabs</h1>
      <h2>Choose component</h2>
      {views.map((view) => (
        <button onClick={() => setViewState(view)}>{view}</button>
      ))}
      {viewState === "Home" && <Home />}
      {viewState === "Profile" && <Profile />}
      {viewState === "About" && <About />}
    </div>
  );
}
